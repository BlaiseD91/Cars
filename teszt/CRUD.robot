*** Settings ***
Library    SeleniumLibrary
*** Variables ***
${url}    http://localhost:4200/
*** Tasks ***
Open Site
    Open Browser    ${url}    Chrome    options=add_experimental_option("detach", True)
    sleep   2s
    Page Should Contain    Navbar
    Page Should Contain Element    xpath:/html/body/app-root/div/app-autok-lista/div[2]/div[5]/button
Verify Create
    Input Text    xpath:/html/body/app-root/div/app-autok-lista/div[2]/div[1]/input    11
    Input Text    xpath:/html/body/app-root/div/app-autok-lista/div[2]/div[2]/input    Mazda
    Input Text    xpath:/html/body/app-root/div/app-autok-lista/div[2]/div[3]/input    HGE-741
    Input Text    xpath:/html/body/app-root/div/app-autok-lista/div[2]/div[4]/input    Dízel
    Capture Page Screenshot    beforeAddingCar.png
    ${sor}    Get Element Count    css:div.row
    Log To Console    Sorok száma add előtt: ${sor}
    Click Button    xpath:/html/body/app-root/div/app-autok-lista/div[2]/div[5]/button
    Capture Page Screenshot    addedCar.png
    ${sor}    Get Element Count    css:div.row
    Log To Console    Sorok száma add után: ${sor}
Verify Update
    Sleep    3s
    ${sor}    Get Element Count    css:div.row
    Input Text    xpath:/html/body/app-root/div/app-autok-lista/div[${sor}]/div[2]/input    Citroen
    Input Text    xpath:/html/body/app-root/div/app-autok-lista/div[${sor}]/div[3]/input    AA-7741
    Sleep    3s
    Click Element    xpath:/html/body/app-root/div/app-autok-lista/div[${sor}]/div[5]/button[2]
    Capture Page Screenshot    modifiedCar.png
    Sleep    5s
Verify Delete
    ${sor}    Get Element Count    css:div.row
    Click Element    xpath:/html/body/app-root/div/app-autok-lista/div[${sor}]/div[5]/button[1]
    Capture Page Screenshot    afterDelete.png