@PatientGrid
Feature: Search Patient

  Background: 
    Given I navigate to patient grid

  @SearchByFirstNameANDlastName
  Scenario Outline: Search Patient Using First and Last Name From Patient Grid
    When I search <Patient> using global search
    Then I should see <Patient_Name> as patient Name

    Examples: 
      | Patient      | Patient_Name | MRN           | DOB        | Patient_Status |
      | Robet, Jhon | Robet, Jhon | EFU9113150401 | 05/27/1950 | Active         |

  @SearchByFirstName
  Scenario Outline: Search Patient Using First Name From Patient Grid
    When I search <Patient> using global search
    #Then I should see <Patient_Name> as patient with <MRN> as MRN and <DOB> as DOB and <Patient_Status> as Status on patient grid
    Then I should see <Patient_Name> as patient Name

    Examples: 
      | Patient | Patient_Name | MRN           | DOB        | Patient_Status |
      | Jhon,    | Robet, Jhon | EFU9113150401 | 05/27/1950 | Active         |

  @SearchByLastNameANDFirstName
  Scenario Outline: Search Patient Using Last and First Name From Patient Grid
    When I search <Patient> using global search
    Then I should see <Patient_Name> as patient Name

    Examples: 
      | Patient     | Patient_Name | MRN           | DOB        | Patient_Status |
      | Jhon, Robet | Robet, Jhon | EFU9113150401 | 05/27/1950 | Active         |

  @SearchByLastName
  Scenario Outline: Search Patient Using Last Name From Patient Grid
    When I search <Patient> using global search
    Then I should see <Patient_Name> as patient Name

    Examples: 
      | Patient | Patient_Name | MRN           | DOB        | Patient_Status |
      | Robet  | Robet, Jhon | EFU9113150401 | 05/27/1950 | Active         |

  @SearchByMRN
  Scenario Outline: Search Patient Using MRN From Patient Grid
    When I search <Patient> using global search
    Then I should see <Patient_Name> as patient Name

    Examples: 
      | Patient       | Patient_Name | MRN           | DOB        | Patient_Status |
      | PE00000068 | Robet, Jhon | EFU9113150401 | 05/27/1950 | Active         |
