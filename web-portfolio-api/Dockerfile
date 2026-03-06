FROM eclipse-temurin:21-jdk  

# Set working directory
WORKDIR /app

# Copy Maven wrapper first
COPY web-portfolio-api/mvnw .
COPY web-portfolio-api/.mvn .mvn

# Copy the rest of the backend source
COPY web-portfolio-api/pom.xml .
COPY web-portfolio-api/src ./src

# Make mvnw executable
RUN chmod +x mvnw

# Build the backend
RUN ./mvnw clean package -DskipTests

# Optional: expose port
EXPOSE 8080

# Default command
CMD ["java", "-jar", "target/web-portfolio-api-0.0.1-SNAPSHOT.jar"]