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
                        .antMatchers(HttpMethod.GET, "/").permitAll()
                        .antMatchers(HttpMethod.GET, "/api/clients", "/api/clients/*").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/api/cars", "/api/cars/*").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/api/orders", "/api/orders/*").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/api/orderPart", "/api/orderPart/*").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/api/orderService", "/api/orderService/*").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/api/competence", "/api/competence/*").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/api/employee", "/api/employee/*").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/api/parts", "/api/parts/*").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/api/service", "/api/service/*").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "//apiservicePart", "/api/servicePart/*").hasRole("USER")

                        .antMatchers(HttpMethod.POST, "/clients", "/clients/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.POST, "/cars", "/cars/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.POST, "/orders", "/orders/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.POST, "/orderPart", "/orderPart/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.POST, "/orderService", "/orderService/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.POST, "/competence", "/competence/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.POST, "/employee", "/employee/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.POST, "/parts", "/parts/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.POST, "/service", "/service/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.POST, "/servicePart", "/servicePart/*").hasRole("ADMIN")

                        .antMatchers(HttpMethod.PUT, "/clients", "/clients/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.PUT, "/cars", "/cars/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.PUT, "/orders", "/orders/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.PUT, "/orderPart", "/orderPart/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.PUT, "/orderService", "/orderService/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.PUT, "/competence", "/competence/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.PUT, "/employee", "/employee/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.PUT, "/parts", "/parts/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.PUT, "/service", "/service/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.PUT, "/servicePart", "/servicePart/*").hasRole("ADMIN")

                        .antMatchers(HttpMethod.DELETE, "/clients", "/clients/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.DELETE, "/cars", "/cars/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.DELETE, "/orders", "/orders/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.DELETE, "/orderPart", "/orderPart/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.DELETE, "/orderService", "/orderService/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.DELETE, "/competence", "/competence/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.DELETE, "/employee", "/employee/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.DELETE, "/parts", "/parts/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.DELETE, "/service", "/service/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.DELETE, "/servicePart", "/servicePart/*").hasRole("ADMIN")
                        .anyRequest().authenticated())
                .formLogin(Customizer.withDefaults())
                .httpBasic(Customizer.withDefaults());
        return http.build();
    }
}