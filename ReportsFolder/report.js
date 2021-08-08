$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/PatientGrid/SoapNote/SoapNotesCreate_AddHRA.feature");
formatter.feature({
  "name": "Soap Note Creation from Schedule flow",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify That While Clicking HRA - Three Tabs Are Showing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke_USMM_HRATabsVerifications"
    }
  ]
});
formatter.step({
  "name": "I click on schedule tab",
  "keyword": "When "
});
formatter.step({
  "name": "I should see already scheduled appointment",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on three dots",
  "keyword": "When "
});
formatter.step({
  "name": "I click on edit soapnotes",
  "keyword": "* "
});
formatter.step({
  "name": "I click on add HRA plus button",
  "keyword": "* "
});
formatter.step({
  "name": "I should see HRA popup with all tabs",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Patient"
      ]
    },
    {
      "cells": [
        "Robet, Jhon"
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
  "name": "Verify That While Clicking HRA - Three Tabs Are Showing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke_USMM_HRATabsVerifications"
    }
  ]
});
formatter.step({
  "name": "I click on schedule tab",
  "keyword": "When "
});
formatter.match({
  "location": "SD_SoapNotes.I_click_on_scheduletab()"
});
