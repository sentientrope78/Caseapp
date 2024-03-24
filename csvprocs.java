import javafx.application.Application;
import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.VBox;
import javafx.scene.paint.Color;
import javafx.scene.text.Font;
import javafx.scene.text.Text;
import javafx.stage.FileChooser;
import javafx.stage.Stage;
import javafx.stage.StageStyle;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class csvprocs extends Application {

    @Override
    public void start(Stage primaryStage) {
        primaryStage.initStyle(StageStyle.UNDECORATED);
        primaryStage.setTitle("Health Metrics Analyzer");

        // Heading text
        Text heading = new Text("Health Metrics Analyzer");
        heading.setFont(Font.font("Verdana", 24));
        heading.setFill(Color.DEEPPINK);

        // Features text
        Text features = new Text("Features:\n" +
                "- Upload and analyze health data\n" +
                "- Compare results with normal ranges\n" +
                "- View summary of health metrics");
        features.setFont(Font.font("Verdana", 16));
        features.setFill(Color.MEDIUMPURPLE);

        // Button to open FileChooser
        Button chooseFileButton = new Button("Choose CSV File");
        chooseFileButton.setOnAction(event -> {
            FileChooser fileChooser = new FileChooser();
            fileChooser.setTitle("Open CSV File");
            fileChooser.getExtensionFilters().add(new FileChooser.ExtensionFilter("CSV Files", "*.csv"));
            File selectedFile = fileChooser.showOpenDialog(primaryStage);
            if (selectedFile != null) {
                processCsvFile(selectedFile);
                // Additional UI updates or confirmation messages could be added here
            }
        });

        // Styling the button
        chooseFileButton.setStyle("-fx-background-color: palevioletred; -fx-text-fill: white;");

        // Layout configuration
        VBox layout = new VBox(20, heading, features, chooseFileButton);
        layout.setAlignment(Pos.CENTER);
        layout.setPadding(new Insets(50));
        layout.setStyle("-fx-background-color: lavenderblush; " +
                "-fx-background-radius: 10; " +
                "-fx-effect: dropshadow(three-pass-box, rgba(0,0,0,0.8), 10, 0, 0, 0);");

        Scene scene = new Scene(layout, 400, 300);
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    void processCsvFile(File csvFile) {
        Map<String, String> patientData = PatientDataLoader.readPatientDataFromFile(csvFile.getAbsolutePath());
        // Here you could retrieve the results from the processor and update the UI accordingly
        // For example, displaying a simple confirmation message or summary of results
        System.out.println(patientData); // For demonstration, printing out the loaded data
    }

    public static void main(String[] args) {
        launch(args);
    }
}

class PatientDataLoader {

    public static Map<String, String> readPatientDataFromFile(String filePath) {
        Map<String, String> patientData = new HashMap<>();
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            String line;
            while ((line = br.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length > 3) { // Ensure there's data to read
                    String attributeName = parts[0].trim();
                    String attributeValue = parts[3].trim(); // Assuming the data is in the fourth column (Row D)
                    patientData.put(attributeName, attributeValue);
                }
            }
        } catch (IOException e) {
            System.err.println("Error reading the file: " + e.getMessage());
        }
        return patientData;
    }
}
