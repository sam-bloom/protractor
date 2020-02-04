Feature: LiveTraffic-HomePage

    In order to validate todo list features
    As a user
    I want to launch and land on homepage

    @bvt @smoke @demo
    Scenario Outline: add item to todo list

        Given I go to "https://angularjs.org/"
        When user validate the homepage title as "AngularJS — Superheroic JavaScript MVW Framework"
        When user adds "<TodoItem>" to the todo list
        Then added "<TodoItem>" should display sucessfully
        When user navigate to learning page
        Then user should see learning content

        Examples:
            | TodoItem          |
            | Test Automation   |

