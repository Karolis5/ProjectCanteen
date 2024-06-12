package com.bezkoder.spring.exception;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.bezkoder.spring.security.mongodb.payload.response.MessageResponse;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<?> handleValidationExceptions(MethodArgumentNotValidException ex) {
        List<String> errors = ex.getBindingResult()
            .getAllErrors().stream()
            .map(objectError -> objectError.getDefaultMessage())
            .collect(Collectors.toList());

        return new ResponseEntity<>(new MessageResponse(errors.toString()), HttpStatus.BAD_REQUEST);
    }

    // Add more exception handlers as needed
}


