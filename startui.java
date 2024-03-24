import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.layout.VBox;
import javafx.scene.paint.Color;
import javafx.scene.text.Font;
import javafx.scene.text.Text;
import javafx.stage.FileChooser;
import javafx.stage.Modality;
import javafx.stage.Screen;
import javafx.stage.Stage;
import javafx.stage.StageStyle;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

public class startui extends Application {

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
    	
        // Your initial setup remains unchanged.
        // ...
    }

    private static final double UPPER_LIMIT = 100; // Define your range's upper limit.

    private void processCsvFile(File csvFile) {
        try (BufferedReader br = new BufferedReader(new FileReader(csvFile))) {
            String line;
            StringBuilder dataToShow = new StringBuilder();
            while ((line = br.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length > 2) { // Adjusted to check Column C
                    String attributeName = parts[0].trim();
                    String attributeValue = parts[2].trim(); // Now checking Column C
                    
                    try {
                        double value = Double.parseDouble(attributeValue);
                        if (value > UPPER_LIMIT) {
                            dataToShow.append(attributeName).append(": ").append(attributeValue).append("\n");
                        }
                    } catch (NumberFormatException e) {
                        // Non-numeric data, always show.
                        dataToShow.append(attributeName).append(": ").append(attributeValue).append("\n");
                    }
                }
            }
            if (dataToShow.length() > 0) {
                displayDataInUI(dataToShow.toString());
            } else {
                displayNoDataMessageInUI();
            }
        } catch (IOException e) {
            System.err.println("Error reading the file: " + e.getMessage());
        }
    }

    private void displayDataInUI(String dataToShow) {
        Stage dataStage = new Stage();
        dataStage.initModality(Modality.APPLICATION_MODAL);
        dataStage.setTitle("Processed Data");

        // Creating the "Treat" button
        Button treatButton = new Button("Treat");
        treatButton.setStyle("-fx-background-color: lightgreen; -fx-text-fill: white;");
        treatButton.setOnAction(event -> treatAction());

        VBox layout = new VBox(10);
        layout.setAlignment(Pos.TOP_LEFT);
        layout.setPadding(new Insets(10));
        layout.setStyle("-fx-background-color: #fff0f5; -fx-border-color: #d3d3d3; -fx-border-width: 2;");

        // Adding data labels to the layout
        String[] dataLines = dataToShow.split("\n");
        for (String line : dataLines) {
            Label dataLabel = new Label(line);
            dataLabel.setFont(Font.font("Arial", 14));
            dataLabel.setTextFill(Color.DARKSLATEBLUE);
            layout.getChildren().add(dataLabel);
        }

        // Adding the "Treat" button at the end
        layout.getChildren().add(treatButton);

        Scene scene = new Scene(layout, 400, 300);
        dataStage.setScene(scene);
        dataStage.showAndWait();
    }

    private void displayNoDataMessageInUI() {
        Stage messageStage = new Stage();
        messageStage.initModality(Modality.APPLICATION_MODAL);
        messageStage.setTitle("No Data");

        VBox layout = new VBox(20);
        layout.setAlignment(Pos.CENTER);
        layout.setPadding(new Insets(20));
        layout.setStyle("-fx-background-color: #fff0f5; -fx-border-color: #d3d3d3; -fx-border-width: 2;");

        Label messageLabel = new Label("No relevant data to display. All metrics are within the normal range.");
        messageLabel.setFont(Font.font("Arial", 14));
        messageLabel.setTextFill(Color.FIREBRICK);

        layout.getChildren().add(messageLabel);

        Scene scene = new Scene(layout, 400, 100);
        messageStage.setScene(scene);
        messageStage.showAndWait(); // Use showAndWait to make it modal, ensuring the user sees and acknowledges the message before returning to the main interface.
    }
    private void displayNormalBloodReportMessage() {
        Stage messageStage = new Stage();
        messageStage.initModality(Modality.APPLICATION_MODAL);
        messageStage.setTitle("Blood Report Status");

        VBox layout = new VBox(20);
        layout.setAlignment(Pos.CENTER);
        layout.setPadding(new Insets(20));
        layout.setStyle("-fx-background-color: #fff0f5; -fx-border-color: #d3d3d3; -fx-border-width: 2;");

        Label messageLabel = new Label("Blood report is normal.");
        messageLabel.setFont(Font.font("Arial", 14));
        messageLabel.setTextFill(Color.GREEN);

        layout.getChildren().add(messageLabel);

        Scene scene = new Scene(layout, 400, 100);
        messageStage.setScene(scene);
        messageStage.showAndWait();
    }
    private void treatAction() {
        // This is a placeholder for your analysis or treatment recommendation logic
        displayTreatmentMessage("Balanced diet,"
        		+ " Regular exercise, "
        		+ "Maintain glucose under 144 mg/dL, "
        		+ "Administer insulin injections, "
        		+ "Give birth between 34 to 39 weeks,"
        		+ " Medication include Glyburide and Metformin at dosage of 500 to 2500 mg/day");
    }

    private void displayTreatmentMessage(String message) {
        Stage stage = new Stage();
        stage.initModality(Modality.APPLICATION_MODAL);
        stage.setTitle("Treatment Recommendation");

        Label messageLabel = new Label(message);
        messageLabel.setFont(Font.font("Arial", 14));
        messageLabel.setWrapText(true);

        VBox layout = new VBox(20, messageLabel);
        layout.setAlignment(Pos.CENTER);
        layout.setPadding(new Insets(20));

        Scene scene = new Scene(layout, 300, 200);
        stage.setScene(scene);
        stage.showAndWait();
    }
    private final String[] medications = {
            "Metformin - First-line in Type 2 diabetes treatment.",
            "Sulfonylureas - Stimulates the pancreas to release more insulin.",
            "DPP-4 inhibitors - Helps reduce blood sugar levels."
        };
    private void handleTreatAction(ActionEvent event) {
        Stage stage = new Stage();
        VBox layout = new VBox(10);
        layout.setAlignment(javafx.geometry.Pos.CENTER);

        for (String medication : medications) {
            layout.getChildren().add(new Label(medication));
        }

        String confidenceAdvice = null;
		Label adviceLabel = new Label(confidenceAdvice);
        adviceLabel.setWrapText(true);
        layout.getChildren().add(adviceLabel);

        Scene scene = new Scene(layout, 400, 300);
        stage.setScene(scene);
        stage.setTitle("Treatment Recommendations");
        stage.show();
    }



    public static void main(String[] args) {
        launch(args);
    }
}

