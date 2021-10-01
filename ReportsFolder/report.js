$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/PatientGrid/CarePlan/Care Coordination Left Filters/LOBFilters.feature");
formatter.feature({
  "name": "Care Cordination Left Filters",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Applying LOB Filter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I click on care cordination",
  "keyword": "When "
});
formatter.step({
  "name": "I clear before and after dates",
  "keyword": "* "
});
formatter.step({
  "name": "I click on care cordination reset button",
  "keyword": "And "
});
formatter.step({
  "name": "I clear before and after dates",
  "keyword": "* "
});
formatter.step({
  "name": "I select \u003cLOB\u003e as LOB",
  "keyword": "And "
});
formatter.step({
  "name": "I click on care cordination apply button",
  "keyword": "And "
});
formatter.step({
  "name": "I should see \u003cLOB\u003e as care cordination LOB",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "LOB"
      ]
    },
    {
      "cells": [
        "Non-Attributed"
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
  "name": "Applying LOB Filter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I click on care cordination",
  "keyword": "When "
});
formatter.match({
  "location": "SD_CareCordination_LeftFilters.I_click_on_carecordination()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clear before and after dates",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CareCordination_LeftFilters.ClearDates()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on care cordination reset button",
  "keyword": "And "
});
formatter.match({
  "location": "SD_CareCordination_LeftFilters.click_On_Reset_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clear before and after dates",
  "keyword": "* "
});
formatter.match({
  "location": "SD_CareCordination_LeftFilters.ClearDates()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select Non-Attributed as LOB",
  "keyword": "And "
});
formatter.match({
  "location": "SD_CareCordination_LeftFilters.Select_LOB(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on care cordination apply button",
  "keyword": "And "
});
formatter.match({
  "location": "SD_CareCordination_LeftFilters.click_On_CareCordination_Apply_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Non-Attributed as care cordination LOB",
  "keyword": "Then "
});
formatter.match({
  "location": "SD_CareCordination_LeftFilters.I_should_see_care_cordination_LOB_filters(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});