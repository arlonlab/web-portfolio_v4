FROM eclipse-temurin:21-jdk

WORKDIR /app
COPY . .
RUN chmod +x mvnw

# Dynamically set JAVA_HOME from java -XshowSettings:properties
RUN export JAVA_HOME=$(dirname $(dirname $(readlink -f $(which java)))) && \
    echo "JAVA_HOME=$JAVA_HOME" && \
    ./mvnw clean package -DskipTests

EXPOSE 8080
CMD ["java", "-jar", "target/web-portfolio-api-0.0.1-SNAPSHOT.jar"]