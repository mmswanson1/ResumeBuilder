/*
    Author: Meagan Swanson
    Date: 11/18/2020
    Class: WEB-115.0003
    Assignment: Final Project
*/
function start() {

    if (!validateEmail()) {
        alert("You must enter a valid email address.")
        return;
    }
    var resumeWindow = createNewWindow(850, 1050).document;
    var resumeHTML = '<!DOCTYPE html>\n<head>\n<title>Resume Builder</title>\n<link rel="stylesheet" href="resumeStyle.css">\n</head>\n<body>\n'
    
    // Name 
    var userName = document.getElementById("resume").elements.namedItem("userName").value
    resumeHTML += `<div class="banner nameBanner">\n <h1>${userName}</h1> </div></body></html>`

    
    // Personal information section
    var userCity = document.getElementById("resume").elements.namedItem("userCity").value
    var userState = document.getElementById("resume").elements.namedItem("userState").value
    var userZip = document.getElementById("resume").elements.namedItem("userZip").value
    var userPhone = document.getElementById("resume").elements.namedItem("userPhone").value
    var userEmail = document.getElementById("resume").elements.namedItem("userEmail").value
    var linkedin = document.getElementById("resume").elements.namedItem("linkedin").value
    var portfolio = document.getElementById("resume").elements.namedItem("portfolio").value

    resumeHTML += formatPersonalInfo(userCity, userState, userZip, userPhone, userEmail, linkedin, portfolio)

    // Skill set information section
    var codeSkills = document.getElementById("resume").elements.namedItem("codeSkills").value
    var workEthic = document.getElementById("resume").elements.namedItem("workEthic").value
    var writingSkills = document.getElementById("resume").elements.namedItem("writingSkills").value
    if (codeSkills.length > 0 || workEthic.length > 0 || writingSkills.length > 0) {
        resumeHTML += `<div class="banner"><p class="sectionBanner">General Skills</p></div>`
        resumeHTML += '<div style="margin-left: 10px">'
        if (codeSkills.length > 0) {
            var str = codeSkills.split("\n")
            for (var i = 0; i < str.length; i++) {
                if (str[i].length > 0) {
                    resumeHTML += `<p>&bull; ${str[i]}</p>`
                }
            } 
        }
        if (workEthic.length > 0) {
            var str2 = workEthic.split("\n");
            for (var i = 0; i < str2.length; i++) {
                if (str2[i].length > 0) {
                    resumeHTML += `<p>&bull; ${str2[i]}</p>`
                }
            }
        }
        if (writingSkills.length > 0) {
            var str3 = writingSkills.split("\n");
            for (var i = 0; i < str3.length; i++) {
                if (str3[i].length > 0) {
                    resumeHTML += `<p>&bull; ${str3[i]}</p>`
                }
            }
        }
        resumeHTML += '</div>'
    }
    

    // Technical skills section
    var webTools = document.getElementById("resume").elements.namedItem("webTools").value
    var adobeTools = document.getElementById("resume").elements.namedItem("adobeTools").value
    if (webTools.length > 0 || adobeTools.length >0 ) {
        resumeHTML += `<div class="banner"><p class="sectionBanner">Technical Skills</p></div>`
        resumeHTML += '<div>'
        if (webTools.length > 0) {
            resumeHTML += `<div class="technicalSkills"><p><b>Web Tools:</b></p><p style="width: 75%">${webTools}</p></div>`
        }
        if (adobeTools.length > 0) {
            resumeHTML += `<div class="technicalSkills"><p><b>Adobe Creative Cloud:</b></p><p style="width: 75%">${adobeTools}</p></div>`
        }
        resumeHTML += '</div>'
    }
    
    // Educational background section
    var universityName = document.getElementById("resume").elements.namedItem("universityName").value
    var universityCity = document.getElementById("resume").elements.namedItem("universityCity").value
    var universityState = document.getElementById("resume").elements.namedItem("universityState").value
    var degree = document.getElementById("resume").elements.namedItem("degree").value
    var studyField = document.getElementById("resume").elements.namedItem("studyField").value
    var gradMonth = document.getElementById("resume").elements.namedItem("gradMonth").value
    var gradYear = document.getElementById("resume").elements.namedItem("gradYear").value
    var courses = document.getElementById("resume").elements.namedItem("courses").value

    if (universityName.length > 0 || degree.length > 0 || studyField.length > 0) {
        resumeHTML += `<div class="banner"><p class="sectionBanner">Education</p></div>`

        resumeHTML += '<div style="margin-left: 10px">'
        if (universityName.length > 0) {
            resumeHTML += `<p>${universityName}${universityCity.length > 0 ? ` &mdash; ${universityCity}` : ''}${universityState.length > 0 ? `, ${universityState}` : ''}</p>`
        }

        if (degree.length > 0 || studyField.length > 0) {
            resumeHTML += `<p><b>${degree.length > 0 ? `${degree},` : ''}${studyField.length > 0 ? ` ${studyField},`: ''}</b> ${formatGradDate(gradMonth, gradYear)}</p>`
        }

        if (courses.length > 0) {
            resumeHTML += formatCourses(courses)
        }
        resumeHTML += '</div>'
    }

    // Employment History section
    var employerName1 = document.getElementById("resume").elements.namedItem("employerName1").value
    var employerCity1 = document.getElementById("resume").elements.namedItem("employerCity1").value
    var employerState1 = document.getElementById("resume").elements.namedItem("employerState1").value
    var jobTitle1 = document.getElementById("resume").elements.namedItem("jobTitle1").value
    var startDate1 = document.getElementById("resume").elements.namedItem("startDate1").value
    var endDate1 = document.getElementById("resume").elements.namedItem("endDate1").value
    var jobDescription1 = document.getElementById("resume").elements.namedItem("jobDescription1").value
    var jobDuties1 = document.getElementById("resume").elements.namedItem("jobDuties1").value
    
    var employerName2 = document.getElementById("resume").elements.namedItem("employerName2").value
    var employerCity2 = document.getElementById("resume").elements.namedItem("employerCity2").value
    var employerState2 = document.getElementById("resume").elements.namedItem("employerState2").value
    var jobTitle2 = document.getElementById("resume").elements.namedItem("jobTitle2").value
    var startDate2 = document.getElementById("resume").elements.namedItem("startDate2").value
    var endDate2 = document.getElementById("resume").elements.namedItem("endDate2").value
    var jobDescription2 = document.getElementById("resume").elements.namedItem("jobDescription2").value
    var jobDuties2 = document.getElementById("resume").elements.namedItem("jobDuties2").value

    var employerName3 = document.getElementById("resume").elements.namedItem("employerName3").value
    var employerCity3 = document.getElementById("resume").elements.namedItem("employerCity3").value
    var employerState3 = document.getElementById("resume").elements.namedItem("employerState3").value
    var jobTitle3 = document.getElementById("resume").elements.namedItem("jobTitle3").value
    var startDate3 = document.getElementById("resume").elements.namedItem("startDate3").value
    var endDate3 = document.getElementById("resume").elements.namedItem("endDate3").value
    var jobDescription3 = document.getElementById("resume").elements.namedItem("jobDescription3").value
    var jobDuties3 = document.getElementById("resume").elements.namedItem("jobDuties3").value

    if (employerName1.length > 0 || employerName2.length > 0 || employerName3.length > 0 || jobTitle1.length > 0 || jobTitle2.length > 0 || jobTitle3.length > 0) {
        resumeHTML += `<div class="banner"><p class="sectionBanner">Work Experience</p></div>`

        if (employerName1.length > 0 || jobTitle1.length > 0) {
            resumeHTML += formatWorkExperience(employerName1, employerCity1, employerState1, jobTitle1, startDate1, endDate1, jobDescription1, jobDuties1)
        }

        if (employerName2.length > 0 || jobTitle2.length > 0) {
            resumeHTML += formatWorkExperience(employerName2, employerCity2, employerState2, jobTitle2, startDate2, endDate2, jobDescription2, jobDuties2)
        }

        if (employerName3.length > 0 || jobTitle3.length > 0) {
            resumeHTML += formatWorkExperience(employerName3, employerCity3, employerState3, jobTitle3, startDate3, endDate3, jobDescription3, jobDuties3)
        }
    }

    // References section
    var referenceName1 = document.getElementById("resume").elements.namedItem("referenceName1").value
    var referencePhone1 = document.getElementById("resume").elements.namedItem("referencePhone1").value
    var referenceEmail1 = document.getElementById("resume").elements.namedItem("referenceEmail1").value

    var referenceName2 = document.getElementById("resume").elements.namedItem("referenceName2").value
    var referencePhone2 = document.getElementById("resume").elements.namedItem("referencePhone2").value
    var referenceEmail2 = document.getElementById("resume").elements.namedItem("referenceEmail2").value

    var referenceName3 = document.getElementById("resume").elements.namedItem("referenceName3").value
    var referencePhone3 = document.getElementById("resume").elements.namedItem("referencePhone3").value
    var referenceEmail3 = document.getElementById("resume").elements.namedItem("referenceEmail3").value
    
    if (referenceName1.length > 0 || referenceName2.length > 0 || referenceName3.length > 0) {
        resumeHTML += `<div class="banner"><p class="sectionBanner">References</p></div>`
        resumeHTML += '<div class="twoColumns">'

        if (referenceName1.length > 0) {
            resumeHTML += formatReference(referenceName1, referencePhone1, referenceEmail1)
        }
        if (referenceName2.length > 0) {
            resumeHTML += formatReference(referenceName2, referencePhone2, referenceEmail2)
        }
        if (referenceName3.length > 0) {
            resumeHTML += formatReference(referenceName3, referencePhone3, referenceEmail3)
        }

        resumeHTML += '</div>'
    }

    resumeWindow.write(resumeHTML);

}

function validateEmail(){
    var form = document.getElementById("resume")
    var email = form.userEmail.value
    var pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    var valid = pattern.test(email)
    return valid
}

function createNewWindow(height, width)
{
    var size = "height=" + height + ", width=" + width;
    return window.open("", "", size);
}

function formatGradDate(month, year) {
    if (month.length <= 0 && year.length <= 0) return ''
    if (month.length > 0 && year.length <= 0) return month
    if (month.length <= 0 && year.length > 0) return year

    return `${month} ${year}`
}

function formatCourses(courses) {
    var result = '<p><b>Courses:</b></p><div class="twoColumns">'
    var leftList = '<div style="margin-left: 20px">'
    var rightList = '<div style="width: 50%">'
    var courseList = courses.split('\n')

    for (var i = 0; i < courseList.length; i++) {
        if (i%2 === 0) {
            leftList += `<p>&bull; ${courseList[i]}</p>`
        } else {
            rightList += `<p>&bull; ${courseList[i]}</p>`
        }
        
    }
    leftList += '</div>'
    rightList += '</div>'

    result += `${leftList}${rightList}</div>`
    return result
}

function formatWorkExperience(employerName, employerCity, employerState, jobTitle, startDate, endDate, jobDescription, jobDuties) {
    var result = '<div style="margin-left: 10px">'
    if (employerName.length > 0) {
        result += `<p>${employerName}${formatCityState(employerCity, employerState)}</p>`
    }

    if (jobTitle.length > 0) {
        result += `<p><b>${jobTitle}</b>${formatDatesWorked(startDate, endDate)}</p>`
    }

    if (jobDescription.length > 0) {
        result += `<p>${jobDescription}</p>`
    }

    if (jobDuties.length > 0) {
        result += '<div style="margin-left: 20px">'
        var jobDutiesList = jobDuties.split('\n')

        for (var i = 0; i < jobDutiesList.length; i++) {
            result += `<p>&bull; ${jobDutiesList[i]}</p>`
        }
        result += '</div>'
    }

    result += '</div><br/>'
    return result
}

function formatCityState(city, state)
{
    if (city.length <= 0 && state.length <= 0) return ''
    if (city.length > 0 && state.length <= 0) return ` &mdash; ${city}`
    if (city.length <= 0 && state.length > 0) return ` &mdash; ${state}`

    return ` &mdash; ${city}, ${state}`
}

function formatDatesWorked(start, end) {
    return `${start.length > 0 ? `, ${start}` : ', Unknown'} to ${end.length > 0 ? end : 'Present'}`
}

function formatReference(name, phone, email) {
    result = `<div class="reference"><b>${name}</b><br/>`

    if (phone.length > 0) {
        result += `${phone}<br/>`
    }

    if (email.length > 0) {
        result += email
    }

    result += '</div>'
    return result
}

function formatPersonalInfo(city, state, zip, phone, email, linkedin, portfolio) {
    result = '<div id="personalInfo">\n<p>'
    result += `${city.length > 0 ? `${city}, `: ''}${state.length > 0 ? `${state} ` : ''}${zip.length > 0 ? `${zip} ` : ''}`
    result += `${city.length > 0 || state.length > 0 || zip.length > 0 ? ' &diams; ' : ''}`
    result += `${phone.length > 0 ? `${phone} &diams; ` : ''}${email}</p>\n`
    result += `<p style="padding:-60px">${linkedin.length > 0 ? `${linkedin} &diams; `: ''}${portfolio}</p>\n</div>`
    return result
}