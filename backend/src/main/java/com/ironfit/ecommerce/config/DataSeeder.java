package com.ironfit.ecommerce.config;

import com.ironfit.ecommerce.model.Product;
import com.ironfit.ecommerce.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@Configuration
public class DataSeeder {

    @Bean
    public CommandLineRunner initData(ProductRepository productRepository) {
        return args -> {
            if (productRepository.count() == 0) {
                // Seed Products matching the frontend IDs mostly
                Product p1 = new Product();
                p1.setName("Pro Performance Tee");
                p1.setPrice(45.0);
                p1.setCategory("T-Shirts");
                p1.setImage("/black-athletic-performance-t-shirt-men-gym.jpg");
                p1.setRating(4.9);
                p1.setReviews(128);

                Product p2 = new Product();
                p2.setName("Elite Training Shorts");
                p2.setPrice(55.0);
                p2.setCategory("Shorts");
                p2.setImage("/black-gym-training-shorts-men-athletic.jpg");
                p2.setRating(4.8);
                p2.setReviews(89);

                Product p3 = new Product();
                p3.setName("Compression Tank Top");
                p3.setPrice(42.0);
                p3.setCategory("Tank Tops");
                p3.setImage("/black-compression-tank-top-men-gym.jpg");
                p3.setRating(4.7);
                p3.setReviews(156);

                productRepository.saveAll(Arrays.asList(p1, p2, p3));
                System.out.println("Seeded products successfully.");
            }
        };
    }
}
