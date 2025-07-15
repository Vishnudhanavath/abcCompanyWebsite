# Use Maven image to build the application
FROM maven:3.9.6-eclipse-temurin-17 AS build

WORKDIR /app

COPY . .

# Build the project and skip tests
RUN mvn clean package -DskipTests

# Use a smaller OpenJDK image to run the app
FROM openjdk:17-jdk-slim

WORKDIR /app

# Copy the JAR from the build stage
COPY --from=build /app/target/backend-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
