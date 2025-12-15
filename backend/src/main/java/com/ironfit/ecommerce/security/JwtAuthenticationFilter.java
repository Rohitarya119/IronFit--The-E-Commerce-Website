package com.ironfit.ecommerce.security;

import com.ironfit.ecommerce.service.CustomUserDetailsService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private static final org.slf4j.Logger logger = org.slf4j.LoggerFactory.getLogger(JwtAuthenticationFilter.class);

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws ServletException, IOException {

        final String requestURI = request.getRequestURI();
        final String method = request.getMethod();
        final String authorizationHeader = request.getHeader("Authorization");

        System.out.println("Processing " + method + " " + requestURI);
        System.out.println("Authorization Header: " + authorizationHeader);

        String username = null;
        String jwt = null;

        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            jwt = authorizationHeader.substring(7);
            try {
                username = jwtUtil.extractUsername(jwt);
                System.out.println("Extracted username: " + username);
            } catch (Exception e) {
                System.out.println("JWT extraction failed: " + e.getMessage());
            }
        } else {
            System.out.println("No valid Bearer header found.");
        }

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            try {
                System.out.println("Loading user details for: " + username);
                UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);
                System.out.println("User details loaded: " + userDetails.getUsername());

                boolean isValid = jwtUtil.validateToken(jwt, userDetails.getUsername());
                System.out.println("Token validation result: " + isValid);

                if (isValid) {
                    UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
                            userDetails, null, userDetails.getAuthorities());
                    usernamePasswordAuthenticationToken
                            .setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
                    System.out.println("Authenticated user successfully: " + username);
                } else {
                    System.out.println("Token invalid for user: " + username + ". Extracted from token: " + jwtUtil.extractUsername(jwt));
                }
            } catch (Exception e) {
                System.out.println("Authentication error during user loading or validation: " + e.getMessage());
                e.printStackTrace();
            }
        } else {
             if (username == null) System.out.println("Username is null after extraction");
             if (SecurityContextHolder.getContext().getAuthentication() != null) System.out.println("User already authenticated");
        }
        chain.doFilter(request, response);
    }
}
