package com.ironfit.ecommerce.repository;

import com.ironfit.ecommerce.model.Order;
import com.ironfit.ecommerce.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByUser(User user);
}
