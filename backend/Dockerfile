FROM maven:3.10.1-jdk-21 AS build
WORKDIR /workspace
COPY pom.xml mvnw .mvn/ .
COPY src ./src
RUN mvn -B -e -DskipTests package

FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=build /workspace/target/wkt-0.0.1-SNAPSHOT.jar /app/wkt.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app/wkt.jar"]
