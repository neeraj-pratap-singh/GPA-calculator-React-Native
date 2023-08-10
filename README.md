# GPA Calculator

The GPA Calculator is a React Native application that helps students calculate their GPA based on the grading system. Users can input their course types, grades, and other details, and the application will calculate the GPA accordingly. The calculator supports both Weighted and Unweighted GPA calculations.

## Features

### Weighted and Unweighted Calculations

The application can perform both Weighted and Unweighted GPA calculations.

- **Weighted GPA:** In this mode, AP and Honors classes are given more weight in the calculation.
  - A: 5.0
  - B: 4.0
  - C: 3.0
  - F: 0.0

- **Unweighted GPA:** In this mode, all classes are treated equally.
  - A: 4.0
  - B: 3.0
  - C: 2.0
  - F: 0.0

### Flexible Input

Users can input multiple courses, including the type (AP, Honors, Regular), course name, and grade.

- **Add Course:** Allows users to add more courses to the list.
- **Delete Course:** Allows users to delete the last added course from the list.

### Calculation and Display

Once the users have entered their courses and grades, they can click on the "Calculate" button to calculate the GPA. The result is then displayed in a modal, styled as a small box hovering over the base screen.

### Skipping Regular Courses

In the case of Weighted calculations, rows with the type 'Regular' are skipped, and their data is not included in the GPA calculation.

## Installation

Follow the instructions to set up the project on your local machine.

1. Clone the repository:

```bash
git clone https://github.com/your-username/GPA-Calculator.git
```

2. Navigate to the project directory:

```bash
cd GPA-Calculator
```

3. Install the dependencies:

```bash
npm install
```

4. Start the React Native development server:

```bash
npm start
```

5. Run the application on your preferred platform (iOS/Android):

```bash
npm run ios
npm run android
```

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

You may need to modify URLs, paths, and other specific details according to your project's configuration and structure.
