package com.example.TestSpring.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.annotation.web.configurers.CsrfConfigurer;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.csrf.CsrfFilter;



@Configuration
@EnableMethodSecurity(securedEnabled = true)
public class SecurityConfiguration {
    @Bean
    public UserDetailsService users() {
        UserDetails user = User.withDefaultPasswordEncoder()
                .username("user")
                .password("user")
                .roles("USER")
                .build();
        UserDetails admin = User.withDefaultPasswordEncoder()
                .username("admin")
                .password("admin")
                .roles("USER", "ADMIN")
                .build();
        return new InMemoryUserDetailsManager(user, admin);
    }

    @Bean
    public SecurityFilterChain http(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(auth -> auth
                        .antMatchers(HttpMethod.GET, "/api/viewService", "/api/viewService/*").permitAll()
                        .antMatchers(HttpMethod.GET, "/api/clients", "/api/clients/*").permitAll()
                        .antMatchers(HttpMethod.GET, "/api/cars", "/api/cars/*").permitAll()
                        .antMatchers(HttpMethod.GET, "/api/orders", "/api/orders/*").permitAll()
                        .antMatchers(HttpMethod.GET, "/api/orderPart", "/api/orderPart/*").permitAll()
                        .antMatchers(HttpMethod.GET, "/api/orderService", "/api/orderService/*").permitAll()
                        .antMatchers(HttpMethod.GET, "/api/competence", "/api/competence/*").permitAll()
                        .antMatchers(HttpMethod.GET, "/api/employee", "/api/employee/*").permitAll()
                        .antMatchers(HttpMethod.GET, "/api/parts", "/api/parts/*").permitAll()
                        .antMatchers(HttpMethod.GET, "/api/service", "/api/service/*").permitAll()
                        .antMatchers(HttpMethod.GET, "/api/servicePart", "/api/servicePart/*").permitAll()

                        .antMatchers(HttpMethod.POST, "/api/clients", "/api/clients/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.POST, "/api/cars", "/api/cars/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.POST, "/api/orders", "/api/orders/*").permitAll()
                        .antMatchers(HttpMethod.POST, "/api/orderPart", "/api/orderPart/*").permitAll()
                        .antMatchers(HttpMethod.POST, "/api/orderService", "/api/orderService/*").permitAll()
                        .antMatchers(HttpMethod.POST, "/api/competence", "/api/competence/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.POST, "/api/employee", "/api/employee/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.POST, "/api/parts", "/api/parts/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.POST, "/api/service", "/api/service/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.POST, "/api/servicePart", "/api/servicePart/*").hasRole("ADMIN")

                        .antMatchers(HttpMethod.PUT, "/api/clients", "/api/clients/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.PUT, "/api/cars", "/api/cars/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.PUT, "/api/orders", "/api/orders/*").permitAll()
                        .antMatchers(HttpMethod.PUT, "/api/orderPart", "/api/orderPart/*").permitAll()
                        .antMatchers(HttpMethod.PUT, "/api/orderService", "/api/orderService/*").permitAll()
                        .antMatchers(HttpMethod.PUT, "/api/competence", "/api/competence/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.PUT, "/api/employee", "/api/employee/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.PUT, "/api/parts", "/api/parts/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.PUT, "/api/service", "/api/service/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.PUT, "/api/servicePart", "/api/servicePart/*").hasRole("ADMIN")

                        .antMatchers(HttpMethod.DELETE, "/api/clients", "/api/clients/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.DELETE, "/api/cars", "/api/cars/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.DELETE, "/api/orders", "/api/orders/*").permitAll()
                        .antMatchers(HttpMethod.DELETE, "/api/orderPart", "/api/orderPart/*").permitAll()
                        .antMatchers(HttpMethod.DELETE, "/api/orderService", "/api/orderService/*").permitAll()
                        .antMatchers(HttpMethod.DELETE, "/api/competence", "/api/competence/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.DELETE, "/api/employee", "/api/employee/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.DELETE, "/api/parts", "/api/parts/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.DELETE, "/api/service", "/api/service/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.DELETE, "/api/servicePart", "/api/servicePart/*").hasRole("ADMIN")

                        .antMatchers(HttpMethod.GET, "*").permitAll())
                .formLogin(Customizer.withDefaults())
                .httpBasic(Customizer.withDefaults());
        return http.build();
    }
}