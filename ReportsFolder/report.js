$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/PatientGrid/CarePlan/FromPreviousCarePlan.feature");
formatter.feature({
  "name": "From Previous Care Plan - Based On patient Medical Record",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify Previous Care Plan - BOPMR",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeUSMM_PreviousCP_BOPMR"
    }
  ]
});
formatter.step({
  "name": "I search \u003cPatient\u003e using global search",
  "keyword": "When "
});
formatter.step({
  "name": "I am on PWB with \u003cPatient\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on care plan tab",
  "keyword": "* "
});
formatter.step({
  "name": "I click on add new care plan button",
  "keyword": "* "
});
formatter.step({
  "name": "I click on basedonpatientmedicalrecord",
  "keyword": "* "
});
formatter.step({
  "name": "I should see patient \u003cPatient\u003e as patient_name",
  "keyword": "* "
});
formatter.step({
  "name": "I enter title \u003cTitle\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I click on save and close button",
  "keyword": "* "
});
formatter.step({
  "name": "I should see success message \u003cSucessMessage\u003e of CP",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on add new care plan button",
  "keyword": "When "
});
formatter.step({
  "name": "I click on FromPreviousCarePlan",
  "keyword": "* "
});
formatter.step({
  "name": "I select care plan from popup",
  "keyword": "* "
});
formatter.step({
  "name": "I should see patient \u003cPatient\u003e as patient_name",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Patient",
        "Title",
        "SucessMessage"
      ]
    },
    {
      "cells": [
        "Robet, Jhon",
        "PreviousPatient",
        "successCare Plan Saved SuccessfullyHide"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to patient grid",
  "keyword": "Given "
});
formatter.match({
  "location": "SD_PatientGrid.I_navigate_to_patient_grid()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Previous Care Plan - BOPMR",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeUSMM_PreviousCP_BOPMR"
    }
  ]
});
formatter.step({
  "name": "I search Robet, Jhon using global search",
  "keyword": "When "
});
formatter.match({
  "location": "SD_SearchPatient.search_Patient(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am on PWB with Robet, Jhon",
  "keyword": "Then "
});
formatter.match({
  "location": "SD_BOPMR.I_am_on_PWB(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on care plan tab",
  "keyword": "* "
});
formatter.match({
  "location": "SD_BOPMR.click_On_Care_Plan_Tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on add new care plan button",
  "keyword": "* "
});
formatter.match({
  "location": "SD_BOPMR.click_On_Add_New_Care_Plan_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on basedonpatientmedicalrecord",
  "keyword": "* "
});
formatter.match({
  "location": "SD_BOPMR.click_On_BasedOnPatientMedicalRecord()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see patient Robet, Jhon as patient_name",
  "keyword": "* "
});
formatter.match({
  "location": "SD_BOPMR.verify_Patient_Data(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter title PreviousPatient",
  "keyword": "When "
});
formatter.match({
  "location": "SD_BOPMR.user_Enter_Title_TestingPatient(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on save and close button",
  "keyword": "* "
});
formatter.match({
  "location": "SD_BOPMR.click_On_SaveClose_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see success message successCare Plan Saved SuccessfullyHide of CP",
  "keyword": "Then "
});
formatter.match({
  "location": "SD_BOPMR.Close_and_Verify_Alert_Message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on add new care plan button",
  "keyword": "When "
});
formatter.match({
  "location": "SD_BOPMR.click_On_Add_New_Care_Plan_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on FromPreviousCarePlan",
  "keyword": "* "
});
formatter.match({
  "location": "SD_FromPreviosCarePlan.I_click_on_FromPreviousCarePlan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select care plan from popup",
  "keyword": "* "
});
formatter.match({
  "location": "SD_FromPreviosCarePlan.I_click_on_CreatedPatient()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see patient Robet, Jhon as patient_name",
  "keyword": "Then "
});
formatter.match({
  "location": "SD_BOPMR.verify_Patient_Data(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});