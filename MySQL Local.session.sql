SELECT * FROM SimpleCarbonTracker.Person;

CREATE TABLE QuestionAnswer (
  idQuestionAnswer int NOT NULL AUTO_INCREMENT,
  idQuestion int NOT NULL,
  idAnswer int NOT NULL,
  Score int NOT NULL,
  PRIMARY KEY (idQuestionAnswer)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci