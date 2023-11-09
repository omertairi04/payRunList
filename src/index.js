import express from 'express';
// import expressLayouts from "express-ejs-layouts";
const app = express();

app.use(express.static("public"));
// app.use(expressLayouts);
app.set("view engine", "ejs");

// Define a route to read and parse the JSON file and render an EJS template
app.get('/', (req, res) => { 
    const payRuns = {
        "data": {
            "status": "CORRECTION_PHASE",
            "type": "STANDARD",
            "id": "f00cc3da-1526-4cdb-813b-0deb2b3779d0",
            "startDate": "2023-11-01T00:00:00.000Z",
            "endDate": "2023-11-30T00:00:00.000Z",
            "month": "2023-11",
            "ledgerId": "ebe9f11b-c1fc-4efb-96f9-54d30b46dc97",
            "noEmployees": 11,
            "earnings": 19262.40909090909,
            "contributions": 112313.71545454547,
            "incomeTax": 29556.240909090913,
            "deductions": 0,
            "effectiveNet": 183248.69363636363,
            "docMpin": [
                {
                    "url": "https://api-accountx.intelory.com/api/client/122134bf-9cfc-45e3-aa04-04eefbfde93f/pay-run/f00cc3da-1526-4cdb-813b-0deb2b3779d0/file/mpin/2023-09-28-12-58-12-PM.txt",
                    "type": "txt",
                    "name": "MPIN.txt",
                    "status": "PAID"
                },
                {
                    "url": "https://api-accountx.intelory.com/api/client/122134bf-9cfc-45e3-aa04-04eefbfde93f/pay-run/f00cc3da-1526-4cdb-813b-0deb2b3779d0/file/mpin/2023-09-28-13-01-33-PM.txt",
                    "type": "txt",
                    "name": "MPIN.txt",
                    "status": "PAID"
                },
                {
                    "url": "https://api-accountx.intelory.com/api/client/122134bf-9cfc-45e3-aa04-04eefbfde93f/pay-run/f00cc3da-1526-4cdb-813b-0deb2b3779d0/file/mpin/2023-10-02-11-16-10-AM.txt",
                    "type": "txt",
                    "name": "MPIN.txt",
                    "status": "NOT_CONFIRMED"
                }
            ],
            "payLists": [
                {
                    "url": "https://api-accountx.intelory.com/api/client/122134bf-9cfc-45e3-aa04-04eefbfde93f/pay-run/f00cc3da-1526-4cdb-813b-0deb2b3779d0/file/pay-list/2023-09-28-12-57-16-PM.pdf",
                    "type": "PDF",
                    "name": "PayList.pdf"
                },
                {
                    "url": "https://api-accountx.intelory.com/api/client/122134bf-9cfc-45e3-aa04-04eefbfde93f/pay-run/f00cc3da-1526-4cdb-813b-0deb2b3779d0/file/pay-list/2023-09-28-13-00-37-PM.pdf",
                    "type": "PDF",
                    "name": "PayList.pdf"
                },
                {
                    "url": "https://api-accountx.intelory.com/api/client/122134bf-9cfc-45e3-aa04-04eefbfde93f/pay-run/f00cc3da-1526-4cdb-813b-0deb2b3779d0/file/pay-list/2023-10-02-11-16-09-AM.pdf",
                    "type": "PDF",
                    "name": "PayList.pdf"
                }
            ],
            "totalGross": 276300,
            "paidDates": [
                "2023-09-28T12:57:41.000Z",
                "2023-09-29T12:57:41.000Z"
            ],
            "correctionPhase": true,
            "createdAt": "2023-09-28T12:54:22.583Z",
            "updatedAt": "2023-10-02T11:16:10.035Z",
            "deletedAt": null,
            "payRunData": [
                {
                    "id": "0fbeb414-ff91-47f7-952e-95bf2726b90a",
                    "payRunId": "f00cc3da-1526-4cdb-813b-0deb2b3779d0",
                    "employeeId": "ff3c5b0b-9295-4655-b26e-538cd5805f63",
                    "effectiveGross": 61200,
                    "baseGross": 60000,
                    "earnings": 1200,
                    "experiencePay": 0,
                    "overtimeHours": 0,
                    "overtimeAmount": 0,
                    "publicHolidayHours": 0,
                    "publicHolidayAmount": 0,
                    "nightTimeHours": 0,
                    "nightTimeAmount": 0,
                    "sundayHours": 0,
                    "sundayAmount": 0,
                    "religiousHolidayHours": 0,
                    "religiousHolidayAmount": 0,
                    "shiftWorkHours": 0,
                    "shiftWorkAmount": 0,
                    "allowances": [
                        {
                            "value": 1200
                        }
                    ],
                    "contributions": 23256,
                    "days": 22,
                    "paySlips": [
                        {
                            "url": "https://api-accountx.intelory.com/api/client/122134bf-9cfc-45e3-aa04-04eefbfde93f/pay-run/f00cc3da-1526-4cdb-813b-0deb2b3779d0/file/pay-slip/ff3c5b0b-9295-4655-b26e-538cd5805f63.pdf",
                            "type": "PDF",
                            "name": "PaySlip.pdf"
                        }
                    ],
                    "totalAllowances": 1200,
                    "totalDeductions": 0,
                    "overtimeHolidaysTotalValue": 0,
                    "pensionInsAmount": 11505.6,
                    "healthInsAmount": 4590,
                    "additionalHealthInsAmount": 306,
                    "unemploymentInsAmount": 734.4,
                    "incomeTaxAmount": 6120,
                    "netSalary": 37944,
                    "deductions": [
                        {
                            "value": 0,
                            "id": "6f7d02a4-f280-4a35-aaba-c29ca29b079d",
                            "startDate": null
                        }
                    ],
                    "effectiveNetSalary": 37944,
                    "activeSalary": false,
                    "totalHoursWorked": 140.8,
                    "salaryPerHour": 426.1363636363636,
                    "payOnlyContributions": true,
                    "belongsToCurrentRerun": true,
                    "correctionPhase": true,
                    "selectedForRerun": false,
                    "updatedAt": "2023-09-28T12:54:22.587Z",
                    "dateUpdated": "2023-09-28 1:47 PM",
                    "createdAt": "2023-09-28T12:54:22.587Z",
                    "employee": {
                        "id": "ff3c5b0b-9295-4655-b26e-538cd5805f63",
                        "name": "Ardit",
                        "surname": "Beqiri",
                        "dateOfBirth": "2023-07-31T22:00:00.000Z",
                        "embg": "0101000473001",
                        "personalIdNumber": "FF333",
                        "passportNumber": "PS123123",
                        "email": "bs@bs.com",
                        "address": {
                            "country": "North Macedonia",
                            "street": "Beloviste B.B.",
                            "city": "Gostivar",
                            "state": "RMV",
                            "zip": "1230",
                            "municipality": "Врапчиште"
                        },
                        "clientId": "122134bf-9cfc-45e3-aa04-04eefbfde93f",
                        "healthInsuranceFundLocalOfficeId": 4,
                        "documents": [],
                        "createdAt": "2023-08-15T13:44:32.937Z",
                        "updatedAt": "2023-10-04T14:07:25.014Z",
                        "employment": {
                            "id": "7b1c1dd7-13a5-4879-85ee-6ea04465e2fa",
                            "employmentStartDate": "2023-08-13T22:00:00.000Z",
                            "employmentEndDate": "2023-08-25T22:00:00.000Z",
                            "weeklyWorkingHours": 32,
                            "businessUnit": "Sales",
                            "taxExemptionCodeId": 1,
                            "totalExperienceYears": null,
                            "totalExperienceMonths": null,
                            "totalExperienceDays": null,
                            "role": "Manager",
                            "employeeId": "ff3c5b0b-9295-4655-b26e-538cd5805f63",
                            "createdAt": "2023-08-15T13:44:32.946Z",
                            "updatedAt": "2023-10-04T14:07:25.022Z",
                            "typeOfExperienceId": 1
                        },
                        "salary": {
                            "id": "8657f1dd-af11-421c-911c-a16882edb020",
                            "employeeId": "ff3c5b0b-9295-4655-b26e-538cd5805f63",
                            "points": 1,
                            "pointMoneyValue": 0,
                            "grossSalary": 60000,
                            "active": true
                        },
                        "deductions": [
                            {
                                "type": "ADMINISTRATIVNA ZABRANA OD UJP",
                                "id": "478206f1-d04a-4787-bfa7-306c4982dd3c",
                                "employeeId": "ff3c5b0b-9295-4655-b26e-538cd5805f63",
                                "deductionMultiplier": 0.3333333333333333,
                                "totalDeductionAmount": 10000,
                                "determinedDeductionAmountPerSala": null,
                                "totalDeductionAmountLeft": null,
                                "clientPartnerId": null,
                                "startDate": "2023-09-29T22:00:00.000Z",
                                "description": "Test"
                            }
                        ],
                        "allowances": [
                            {
                                "type": "ALLOWANCE TYPE 1",
                                "id": "c2966952-7e7a-4a16-8e39-be47d4e78007",
                                "employeeId": "ff3c5b0b-9295-4655-b26e-538cd5805f63",
                                "value": 1200
                            }
                        ]
                    }
                },
                {
                    "id": "b639cafd-5c0d-452b-82e1-ef71ba825879",
                    "payRunId": "f00cc3da-1526-4cdb-813b-0deb2b3779d0",
                    "employeeId": "d2309f35-6299-41f8-911e-067fbbdac100",
                    "effectiveGross": 32350,
                    "baseGross": 30000,
                    "earnings": 2350,
                    "experiencePay": 1350,
                    "overtimeHours": 0,
                    "overtimeAmount": 0,
                    "publicHolidayHours": 0,
                    "publicHolidayAmount": 0,
                    "nightTimeHours": 0,
                    "nightTimeAmount": 0,
                    "sundayHours": 0,
                    "sundayAmount": 0,
                    "religiousHolidayHours": 0,
                    "religiousHolidayAmount": 0,
                    "shiftWorkHours": 0,
                    "shiftWorkAmount": 0,
                    "allowances": [
                        {
                            "value": 1000
                        }
                    ],
                    "contributions": 12293,
                    "days": 22,
                    "paySlips": [
                        {
                            "url": "https://api-accountx.intelory.com/api/client/122134bf-9cfc-45e3-aa04-04eefbfde93f/pay-run/f00cc3da-1526-4cdb-813b-0deb2b3779d0/file/pay-slip/d2309f35-6299-41f8-911e-067fbbdac100.pdf",
                            "type": "PDF",
                            "name": "PaySlip.pdf"
                        }
                    ],
                    "totalAllowances": 1000,
                    "totalDeductions": 0,
                    "overtimeHolidaysTotalValue": 0,
                    "pensionInsAmount": 6081.8,
                    "healthInsAmount": 2426.25,
                    "additionalHealthInsAmount": 161.75,
                    "unemploymentInsAmount": 388.2,
                    "incomeTaxAmount": 3235,
                    "netSalary": 20057,
                    "deductions": [
                        {
                            "value": 0,
                            "id": "d698705d-4694-4398-99a3-cee114550273",
                            "startDate": "2023-09-05T22:00:00.000Z"
                        },
                        {
                            "value": 0,
                            "id": "03152cb0-60b7-4f8e-9acc-2e290f6e103e",
                            "startDate": "2023-09-05T22:00:00.000Z"
                        }
                    ],
                    "effectiveNetSalary": 20057,
                    "activeSalary": true,
                    "totalHoursWorked": 176,
                    "salaryPerHour": 178.125,
                    "payOnlyContributions": false,
                    "belongsToCurrentRerun": false,
                    "correctionPhase": false,
                    "selectedForRerun": false,
                    "updatedAt": "2023-09-28T12:54:22.587Z",
                    "dateUpdated": "2023-09-28 12:51 PM",
                    "createdAt": "2023-09-28T12:54:22.587Z",
                    "employee": {
                        "id": "d2309f35-6299-41f8-911e-067fbbdac100",
                        "name": "Omer",
                        "surname": "Tairi",
                        "dateOfBirth": "2023-09-05T22:00:00.000Z",
                        "embg": "GF1231",
                        "personalIdNumber": "GF2122",
                        "passportNumber": "GX111",
                        "email": "omer@gmail.com",
                        "address": {
                            "country": "Antigua and Barbuda",
                            "state": "SFC",
                            "street": "SDF12",
                            "city": "Sdreigh",
                            "zip": "19992"
                        },
                        "clientId": "122134bf-9cfc-45e3-aa04-04eefbfde93f",
                        "healthInsuranceFundLocalOfficeId": 1,
                        "documents": [],
                        "createdAt": "2023-09-06T16:39:50.487Z",
                        "updatedAt": "2023-09-06T16:39:50.487Z",
                        "employment": {
                            "id": "926100dd-e2db-447c-8234-c50f97b13083",
                            "employmentStartDate": "2023-09-05T22:00:00.000Z",
                            "employmentEndDate": "2023-10-25T22:00:00.000Z",
                            "weeklyWorkingHours": 40,
                            "businessUnit": "Sales",
                            "taxExemptionCodeId": 2,
                            "totalExperienceYears": 9,
                            "totalExperienceMonths": 2,
                            "totalExperienceDays": 2,
                            "role": "Sales",
                            "employeeId": "d2309f35-6299-41f8-911e-067fbbdac100",
                            "createdAt": "2023-09-06T16:39:50.495Z",
                            "updatedAt": "2023-09-06T16:39:50.495Z",
                            "typeOfExperienceId": 2
                        },
                        "salary": {
                            "id": "cdbd3a24-d72c-4ce4-9134-67001aaa33ce",
                            "employeeId": "d2309f35-6299-41f8-911e-067fbbdac100",
                            "points": null,
                            "pointMoneyValue": 0,
                            "grossSalary": 30000,
                            "active": true
                        },
                        "deductions": [
                            {
                                "id": "03152cb0-60b7-4f8e-9acc-2e290f6e103e",
                                "employeeId": "d2309f35-6299-41f8-911e-067fbbdac100",
                                "deductionMultiplier": null,
                                "totalDeductionAmount": 2011,
                                "determinedDeductionAmountPerSala": null,
                                "totalDeductionAmountLeft": 0,
                                "clientPartnerId": null,
                                "startDate": "2023-09-05T22:00:00.000Z",
                                "description": "test"
                            },
                            {
                                "id": "d698705d-4694-4398-99a3-cee114550273",
                                "employeeId": "d2309f35-6299-41f8-911e-067fbbdac100",
                                "deductionMultiplier": null,
                                "totalDeductionAmount": 1200,
                                "determinedDeductionAmountPerSala": 1000,
                                "totalDeductionAmountLeft": 0,
                                "clientPartnerId": null,
                                "startDate": "2023-09-05T22:00:00.000Z",
                                "description": "avans"
                            }
                        ],
                        "allowances": [
                            {
                                "type": "ALLOWANCE TYPE 1",
                                "id": "548d4c27-8110-4418-b4cf-bcd788a14eb2",
                                "employeeId": "d2309f35-6299-41f8-911e-067fbbdac100",
                                "value": 1000
                            }
                        ]
                    }
                },
                {
                    "id": "8589db5a-36cb-4117-b1f5-c58d438df791",
                    "payRunId": "f00cc3da-1526-4cdb-813b-0deb2b3779d0",
                    "employeeId": "7f456d61-cc2d-4e62-8b24-c53fb62440d0",
                    "effectiveGross": 31000,
                    "baseGross": 30000,
                    "earnings": 1000,
                    "experiencePay": 900,
                    "overtimeHours": 0,
                    "overtimeAmount": 0,
                    "publicHolidayHours": 0,
                    "publicHolidayAmount": 0,
                    "nightTimeHours": 0,
                    "nightTimeAmount": 0,
                    "sundayHours": 0,
                    "sundayAmount": 0,
                    "religiousHolidayHours": 0,
                    "religiousHolidayAmount": 0,
                    "shiftWorkHours": 0,
                    "shiftWorkAmount": 0,
                    "allowances": [
                        {
                            "value": 100
                        }
                    ],
                    "contributions": 11780,
                    "days": 22,
                    "paySlips": [
                        {
                            "url": "https://api-accountx.intelory.com/api/client/122134bf-9cfc-45e3-aa04-04eefbfde93f/pay-run/f00cc3da-1526-4cdb-813b-0deb2b3779d0/file/pay-slip/7f456d61-cc2d-4e62-8b24-c53fb62440d0.pdf",
                            "type": "PDF",
                            "name": "PaySlip.pdf"
                        }
                    ],
                    "totalAllowances": 100,
                    "totalDeductions": 0,
                    "overtimeHolidaysTotalValue": 0,
                    "pensionInsAmount": 5828,
                    "healthInsAmount": 2325,
                    "additionalHealthInsAmount": 155,
                    "unemploymentInsAmount": 372,
                    "incomeTaxAmount": 3100,
                    "netSalary": 19220,
                    "deductions": [
                        {
                            "value": 0,
                            "id": "29c56e42-b886-48ff-b5b6-e4cc2233ff7d",
                            "startDate": "2023-09-10T22:00:00.000Z"
                        }
                    ],
                    "effectiveNetSalary": 19220,
                    "activeSalary": true,
                    "totalHoursWorked": 176,
                    "salaryPerHour": 175.5681818181818,
                    "payOnlyContributions": false,
                    "belongsToCurrentRerun": false,
                    "correctionPhase": false,
                    "selectedForRerun": false,
                    "updatedAt": "2023-09-28T12:54:22.587Z",
                    "dateUpdated": "2023-09-28 12:51 PM",
                    "createdAt": "2023-09-28T12:54:22.587Z",
                    "employee": {
                        "id": "7f456d61-cc2d-4e62-8b24-c53fb62440d0",
                        "name": "Elira",
                        "surname": "Karpuzi",
                        "dateOfBirth": "2023-09-10T22:00:00.000Z",
                        "embg": "EK999",
                        "personalIdNumber": "KD123F",
                        "passportNumber": "GD2222",
                        "email": "elira@elira.coim",
                        "address": {
                            "country": "North Macedonia",
                            "municipality": "Дебар",
                            "street": "DB99",
                            "city": "Debar",
                            "zip": "1200"
                        },
                        "clientId": "122134bf-9cfc-45e3-aa04-04eefbfde93f",
                        "healthInsuranceFundLocalOfficeId": 11,
                        "documents": [],
                        "createdAt": "2023-09-11T11:23:42.333Z",
                        "updatedAt": "2023-09-15T11:43:15.643Z",
                        "employment": {
                            "type": "INTERNAL",
                            "id": "2243c38f-f32c-4569-ae28-62de6171d3cf",
                            "employmentStartDate": "2023-09-10T22:00:00.000Z",
                            "employmentEndDate": "2023-09-20T22:00:00.000Z",
                            "weeklyWorkingHours": 40,
                            "businessUnit": "Sales",
                            "taxExemptionCodeId": 1,
                            "totalExperienceYears": 6,
                            "totalExperienceMonths": 1,
                            "totalExperienceDays": 10,
                            "role": "Developer",
                            "employeeId": "7f456d61-cc2d-4e62-8b24-c53fb62440d0",
                            "createdAt": "2023-09-11T11:23:42.341Z",
                            "updatedAt": "2023-09-15T11:43:15.646Z",
                            "typeOfExperienceId": 2
                        },
                        "salary": {
                            "id": "b73e9783-1afc-4838-ba49-7b23f16ba949",
                            "employeeId": "7f456d61-cc2d-4e62-8b24-c53fb62440d0",
                            "points": null,
                            "pointMoneyValue": 0,
                            "grossSalary": 30000,
                            "active": true
                        },
                        "deductions": [
                            {
                                "id": "29c56e42-b886-48ff-b5b6-e4cc2233ff7d",
                                "employeeId": "7f456d61-cc2d-4e62-8b24-c53fb62440d0",
                                "deductionMultiplier": null,
                                "totalDeductionAmount": 2500,
                                "determinedDeductionAmountPerSala": 100,
                                "totalDeductionAmountLeft": 0,
                                "clientPartnerId": null,
                                "startDate": "2023-09-10T22:00:00.000Z",
                                "description": "test"
                            }
                        ],
                        "allowances": [
                            {
                                "type": "ALLOWANCE TYPE 1",
                                "id": "a391183e-8b2c-4c68-842d-f616296bcd4c",
                                "employeeId": "7f456d61-cc2d-4e62-8b24-c53fb62440d0",
                                "value": 100
                            }
                        ]
                    }
                },
                {
                    "id": "b6475405-7db0-453d-9c3b-b2866dd0d028",
                    "payRunId": "f00cc3da-1526-4cdb-813b-0deb2b3779d0",
                    "employeeId": "a3cd2ff7-654a-4901-9ec1-013faa5d94d5",
                    "effectiveGross": 36794,
                    "baseGross": 35000,
                    "earnings": 1794,
                    "experiencePay": 1750,
                    "overtimeHours": 0,
                    "overtimeAmount": 0,
                    "publicHolidayHours": 0,
                    "publicHolidayAmount": 0,
                    "nightTimeHours": 0,
                    "nightTimeAmount": 0,
                    "sundayHours": 0,
                    "sundayAmount": 0,
                    "religiousHolidayHours": 0,
                    "religiousHolidayAmount": 0,
                    "shiftWorkHours": 0,
                    "shiftWorkAmount": 0,
                    "allowances": [
                        {
                            "value": 44
                        }
                    ],
                    "contributions": 13981.72,
                    "days": 22,
                    "paySlips": [
                        {
                            "url": "https://api-accountx.intelory.com/api/client/122134bf-9cfc-45e3-aa04-04eefbfde93f/pay-run/f00cc3da-1526-4cdb-813b-0deb2b3779d0/file/pay-slip/a3cd2ff7-654a-4901-9ec1-013faa5d94d5.pdf",
                            "type": "PDF",
                            "name": "PaySlip.pdf"
                        }
                    ],
                    "totalAllowances": 44,
                    "totalDeductions": 0,
                    "overtimeHolidaysTotalValue": 0,
                    "pensionInsAmount": 6917.272000000001,
                    "healthInsAmount": 2759.55,
                    "additionalHealthInsAmount": 183.97,
                    "unemploymentInsAmount": 441.52799999999996,
                    "incomeTaxAmount": 3679.4,
                    "netSalary": 22812.28,
                    "deductions": [
                        {
                            "value": 0,
                            "id": "4344b324-c59a-40de-b28e-7ad1e773180b",
                            "startDate": "2023-08-18T22:00:00.000Z"
                        }
                    ],
                    "effectiveNetSalary": 22812.28,
                    "activeSalary": true,
                    "totalHoursWorked": 176,
                    "salaryPerHour": 208.8068181818182,
                    "payOnlyContributions": false,
                    "belongsToCurrentRerun": false,
                    "correctionPhase": false,
                    "selectedForRerun": false,
                    "updatedAt": "2023-09-28T12:54:22.587Z",
                    "dateUpdated": "2023-09-28 12:51 PM",
                    "createdAt": "2023-09-28T12:54:22.587Z",
                    "employee": {
                        "id": "a3cd2ff7-654a-4901-9ec1-013faa5d94d5",
                        "name": "Flamur",
                        "surname": "Limani",
                        "dateOfBirth": "2023-08-13T22:00:00.000Z",
                        "embg": "FL999123111",
                        "personalIdNumber": "FD1111111111",
                        "passportNumber": "PSD21311",
                        "email": "fllimani@limani.com",
                        "address": {
                            "country": "North Macedonia",
                            "municipality": "Битола",
                            "street": "SFG111",
                            "city": "Bitola",
                            "zip": "1231"
                        },
                        "clientId": "122134bf-9cfc-45e3-aa04-04eefbfde93f",
                        "healthInsuranceFundLocalOfficeId": 6,
                        "documents": [
                            {
                                "name": "1111.jpeg",
                                "type": "JPEG",
                                "url": "https://api-accountx.intelory.com/api/accountant/5c2f9eef-5eb1-4f8c-bd5b-7faa5f593d04/file/bc093cb0-c42b-4a52-99bd-2a33152d855d.jpeg"
                            }
                        ],
                        "createdAt": "2023-08-19T15:26:50.354Z",
                        "updatedAt": "2023-08-23T09:57:22.154Z",
                        "employment": {
                            "id": "ad24a860-0e65-4af5-b10c-c84f5723ad7d",
                            "employmentStartDate": "2023-08-18T22:00:00.000Z",
                            "employmentEndDate": "2023-08-22T22:00:00.000Z",
                            "weeklyWorkingHours": 40,
                            "businessUnit": "Sales",
                            "taxExemptionCodeId": 2,
                            "totalExperienceYears": 10,
                            "totalExperienceMonths": 3,
                            "totalExperienceDays": 11,
                            "role": "Developer",
                            "employeeId": "a3cd2ff7-654a-4901-9ec1-013faa5d94d5",
                            "createdAt": "2023-08-19T15:26:50.358Z",
                            "updatedAt": "2023-08-23T09:57:22.159Z",
                            "typeOfExperienceId": 1
                        },
                        "salary": {
                            "id": "94a86166-f186-4a75-8669-e950594256c5",
                            "employeeId": "a3cd2ff7-654a-4901-9ec1-013faa5d94d5",
                            "points": null,
                            "pointMoneyValue": 0,
                            "grossSalary": 35000,
                            "active": true
                        },
                        "deductions": [
                            {
                                "id": "4344b324-c59a-40de-b28e-7ad1e773180b",
                                "employeeId": "a3cd2ff7-654a-4901-9ec1-013faa5d94d5",
                                "deductionMultiplier": 0.2,
                                "totalDeductionAmount": 3000,
                                "determinedDeductionAmountPerSala": 1000,
                                "totalDeductionAmountLeft": 0,
                                "clientPartnerId": null,
                                "startDate": "2023-08-18T22:00:00.000Z",
                                "description": "test"
                            }
                        ],
                        "allowances": [
                            {
                                "type": "ALLOWANCE TYPE 1",
                                "id": "1156d919-189e-483d-a68d-5674e06e8949",
                                "employeeId": "a3cd2ff7-654a-4901-9ec1-013faa5d94d5",
                                "value": 44
                            }
                        ]
                    }
                },
                {
                    "id": "e60ad4d2-755a-4307-ad46-996c463477bc",
                    "payRunId": "f00cc3da-1526-4cdb-813b-0deb2b3779d0",
                    "employeeId": "a1f93efd-d9b0-4344-976f-35bbd582fe3d",
                    "effectiveGross": 33450,
                    "baseGross": 30000,
                    "earnings": 3450,
                    "experiencePay": 450,
                    "overtimeHours": 0,
                    "overtimeAmount": 0,
                    "publicHolidayHours": 0,
                    "publicHolidayAmount": 0,
                    "nightTimeHours": 0,
                    "nightTimeAmount": 0,
                    "sundayHours": 0,
                    "sundayAmount": 0,
                    "religiousHolidayHours": 0,
                    "religiousHolidayAmount": 0,
                    "shiftWorkHours": 0,
                    "shiftWorkAmount": 0,
                    "allowances": [
                        {
                            "value": 3000
                        }
                    ],
                    "contributions": 12711,
                    "days": 22,
                    "paySlips": [
                        {
                            "url": "https://api-accountx.intelory.com/api/client/122134bf-9cfc-45e3-aa04-04eefbfde93f/pay-run/f00cc3da-1526-4cdb-813b-0deb2b3779d0/file/pay-slip/a1f93efd-d9b0-4344-976f-35bbd582fe3d.pdf",
                            "type": "PDF",
                            "name": "PaySlip.pdf"
                        }
                    ],
                    "totalAllowances": 3000,
                    "totalDeductions": 0,
                    "overtimeHolidaysTotalValue": 0,
                    "pensionInsAmount": 6288.6,
                    "healthInsAmount": 2508.75,
                    "additionalHealthInsAmount": 167.25,
                    "unemploymentInsAmount": 401.4,
                    "incomeTaxAmount": 3345,
                    "netSalary": 20739,
                    "deductions": [
                        {
                            "value": 0,
                            "id": "7038ecd2-3608-4687-954f-f0fd7622577a",
                            "startDate": "2023-09-11T22:00:00.000Z"
                        }
                    ],
                    "effectiveNetSalary": 20739,
                    "activeSalary": true,
                    "totalHoursWorked": 176,
                    "salaryPerHour": 173.01136363636363,
                    "payOnlyContributions": false,
                    "belongsToCurrentRerun": false,
                    "correctionPhase": false,
                    "selectedForRerun": false,
                    "updatedAt": "2023-09-28T12:54:22.587Z",
                    "dateUpdated": "2023-09-28 12:51 PM",
                    "createdAt": "2023-09-28T12:54:22.587Z",
                    "employee": {
                        "id": "a1f93efd-d9b0-4344-976f-35bbd582fe3d",
                        "name": "Argjent",
                        "surname": "Shaqiri",
                        "dateOfBirth": "2023-04-04T22:00:00.000Z",
                        "embg": "ARG999",
                        "personalIdNumber": "DRS123",
                        "passportNumber": "PP999",
                        "email": "argjent@gmail.com",
                        "address": {
                            "country": "American Samoa",
                            "state": "Samoa ",
                            "street": "SM222",
                            "city": "Samo",
                            "zip": "1200"
                        },
                        "clientId": "122134bf-9cfc-45e3-aa04-04eefbfde93f",
                        "healthInsuranceFundLocalOfficeId": 5,
                        "documents": [],
                        "createdAt": "2023-09-12T08:07:21.139Z",
                        "updatedAt": "2023-09-22T12:12:13.316Z",
                        "employment": {
                            "type": "INTERNAL",
                            "id": "453650bc-5ae5-42da-82c6-0a441621a34b",
                            "employmentStartDate": "2023-09-11T22:00:00.000Z",
                            "employmentEndDate": "2023-10-16T22:00:00.000Z",
                            "weeklyWorkingHours": 40,
                            "businessUnit": "Sales",
                            "taxExemptionCodeId": 1,
                            "totalExperienceYears": 3,
                            "totalExperienceMonths": 2,
                            "totalExperienceDays": 11,
                            "role": "Developer",
                            "employeeId": "a1f93efd-d9b0-4344-976f-35bbd582fe3d",
                            "createdAt": "2023-09-12T08:07:21.146Z",
                            "updatedAt": "2023-09-22T12:12:13.322Z",
                            "typeOfExperienceId": 1
                        },
                        "salary": {
                            "id": "5be8cd30-c477-4bf5-950b-0d204622ef1b",
                            "employeeId": "a1f93efd-d9b0-4344-976f-35bbd582fe3d",
                            "points": null,
                            "pointMoneyValue": 0,
                            "grossSalary": 30000,
                            "active": true
                        },
                        "deductions": [
                            {
                                "id": "7038ecd2-3608-4687-954f-f0fd7622577a",
                                "employeeId": "a1f93efd-d9b0-4344-976f-35bbd582fe3d",
                                "deductionMultiplier": 0.3333333333333333,
                                "totalDeductionAmount": 3100,
                                "determinedDeductionAmountPerSala": 500,
                                "totalDeductionAmountLeft": 0,
                                "clientPartnerId": null,
                                "startDate": "2023-09-11T22:00:00.000Z",
                                "description": "test"
                            }
                        ],
                        "allowances": [
                            {
                                "type": "ALLOWANCE TYPE 1",
                                "id": "98c58f86-91be-4499-8001-4429000ccfbb",
                                "employeeId": "a1f93efd-d9b0-4344-976f-35bbd582fe3d",
                                "value": 3000
                            }
                        ]
                    }
                },
                {
                    "id": "2d8cd98a-f130-4754-a8d1-0f66434e5a13",
                    "payRunId": "f00cc3da-1526-4cdb-813b-0deb2b3779d0",
                    "employeeId": "1dae39d6-f389-4647-b1f9-019af133509a",
                    "effectiveGross": 2754,
                    "baseGross": 1200,
                    "earnings": 1554,
                    "experiencePay": 54,
                    "overtimeHours": 0,
                    "overtimeAmount": 0,
                    "publicHolidayHours": 0,
                    "publicHolidayAmount": 0,
                    "nightTimeHours": 0,
                    "nightTimeAmount": 0,
                    "sundayHours": 0,
                    "sundayAmount": 0,
                    "religiousHolidayHours": 0,
                    "religiousHolidayAmount": 0,
                    "shiftWorkHours": 0,
                    "shiftWorkAmount": 0,
                    "allowances": [
                        {
                            "value": 1500
                        }
                    ],
                    "contributions": 1046.52,
                    "days": 22,
                    "paySlips": [
                        {
                            "url": "https://api-accountx.intelory.com/api/client/122134bf-9cfc-45e3-aa04-04eefbfde93f/pay-run/f00cc3da-1526-4cdb-813b-0deb2b3779d0/file/pay-slip/1dae39d6-f389-4647-b1f9-019af133509a.pdf",
                            "type": "PDF",
                            "name": "PaySlip.pdf"
                        },
                        {
                            "url": "https://api-accountx.intelory.com/api/client/122134bf-9cfc-45e3-aa04-04eefbfde93f/pay-run/f00cc3da-1526-4cdb-813b-0deb2b3779d0/file/pay-slip/1dae39d6-f389-4647-b1f9-019af133509a.pdf",
                            "type": "PDF",
                            "name": "PaySlip.pdf"
                        }
                    ],
                    "totalAllowances": 1500,
                    "totalDeductions": 0,
                    "overtimeHolidaysTotalValue": 0,
                    "pensionInsAmount": 517.7520000000001,
                    "healthInsAmount": 206.55,
                    "additionalHealthInsAmount": 13.77,
                    "unemploymentInsAmount": 33.047999999999995,
                    "incomeTaxAmount": 275.4,
                    "netSalary": 1707.48,
                    "deductions": [
                        {
                            "value": 0,
                            "id": "b02fcbdd-1942-4ae7-8049-7ae0e53dc789",
                            "startDate": "2023-08-16T22:00:00.000Z"
                        }
                    ],
                    "effectiveNetSalary": 1707.48,
                    "activeSalary": true,
                    "totalHoursWorked": 176,
                    "salaryPerHour": 7.125,
                    "payOnlyContributions": false,
                    "belongsToCurrentRerun": false,
                    "correctionPhase": false,
                    "selectedForRerun": false,
                    "updatedAt": "2023-09-28T12:54:22.587Z",
                    "dateUpdated": "2023-09-28 1:00 PM",
                    "createdAt": "2023-09-28T12:54:22.587Z",
                    "employee": {
                        "id": "1dae39d6-f389-4647-b1f9-019af133509a",
                        "name": "John",
                        "surname": "Doe",
                        "dateOfBirth": "2023-08-23T22:00:00.000Z",
                        "embg": "123123123",
                        "personalIdNumber": "P123",
                        "passportNumber": "123",
                        "email": "john@g.com",
                        "address": {
                            "country": "Armenia",
                            "state": "Stuja",
                            "street": "ST876",
                            "city": "ST888",
                            "zip": "8888"
                        },
                        "clientId": "122134bf-9cfc-45e3-aa04-04eefbfde93f",
                        "healthInsuranceFundLocalOfficeId": 3,
                        "documents": [
                            {
                                "name": "PaySlip (6).pdf",
                                "type": "PDF",
                                "url": "https://api-accountx.intelory.com/api/accountant/5c2f9eef-5eb1-4f8c-bd5b-7faa5f593d04/file/e1a77629-5868-4554-8dd3-d7e3ff402efd.pdf"
                            }
                        ],
                        "createdAt": "2023-08-17T10:44:03.474Z",
                        "updatedAt": "2023-09-11T12:57:56.366Z",
                        "employment": {
                            "id": "772e68b0-d9c5-426f-ae9f-44c462130a8f",
                            "employmentStartDate": "2023-08-16T22:00:00.000Z",
                            "employmentEndDate": "2023-08-17T22:00:00.000Z",
                            "weeklyWorkingHours": 40,
                            "businessUnit": "Sales",
                            "taxExemptionCodeId": 1,
                            "totalExperienceYears": 9,
                            "totalExperienceMonths": 1,
                            "totalExperienceDays": 10,
                            "role": "Manager",
                            "employeeId": "1dae39d6-f389-4647-b1f9-019af133509a",
                            "createdAt": "2023-08-17T10:44:03.482Z",
                            "updatedAt": "2023-09-11T12:57:56.372Z",
                            "typeOfExperienceId": 2
                        },
                        "salary": {
                            "id": "856b6d85-7d86-4a3e-b5c4-22c4d0b3f111",
                            "employeeId": "1dae39d6-f389-4647-b1f9-019af133509a",
                            "points": null,
                            "pointMoneyValue": 0,
                            "grossSalary": 1200,
                            "active": true
                        },
                        "deductions": [
                            {
                                "id": "b02fcbdd-1942-4ae7-8049-7ae0e53dc789",
                                "employeeId": "1dae39d6-f389-4647-b1f9-019af133509a",
                                "deductionMultiplier": 0.3333333333333333,
                                "totalDeductionAmount": 1200,
                                "determinedDeductionAmountPerSala": 100,
                                "totalDeductionAmountLeft": 0,
                                "clientPartnerId": null,
                                "startDate": "2023-08-16T22:00:00.000Z",
                                "description": "test"
                            }
                        ],
                        "allowances": [
                            {
                                "type": "ALLOWANCE TYPE 1",
                                "id": "97c3b281-e232-464f-8e7a-f363368c65d3",
                                "employeeId": "1dae39d6-f389-4647-b1f9-019af133509a",
                                "value": 1500
                            }
                        ]
                    }
                },
                {
                    "id": "a906767e-1ba9-4284-98fb-e6cc29c3aa3d",
                    "payRunId": "f00cc3da-1526-4cdb-813b-0deb2b3779d0",
                    "employeeId": "13985eb3-1bae-4fb6-885a-e6821858e4aa",
                    "effectiveGross": 35265.90909090909,
                    "baseGross": 31400,
                    "earnings": 3865.9090909090905,
                    "experiencePay": 0,
                    "overtimeHours": 0,
                    "overtimeAmount": 0,
                    "publicHolidayHours": 0,
                    "publicHolidayAmount": 0,
                    "nightTimeHours": 20,
                    "nightTimeAmount": 3710.9090909090905,
                    "sundayHours": 0,
                    "sundayAmount": 0,
                    "religiousHolidayHours": 0,
                    "religiousHolidayAmount": 0,
                    "shiftWorkHours": 0,
                    "shiftWorkAmount": 0,
                    "allowances": [
                        {
                            "value": 155
                        }
                    ],
                    "contributions": 13401.045454545456,
                    "days": 22,
                    "paySlips": [
                        {
                            "url": "https://api-accountx.intelory.com/api/client/122134bf-9cfc-45e3-aa04-04eefbfde93f/pay-run/f00cc3da-1526-4cdb-813b-0deb2b3779d0/file/pay-slip/13985eb3-1bae-4fb6-885a-e6821858e4aa.pdf",
                            "type": "PDF",
                            "name": "PaySlip.pdf"
                        }
                    ],
                    "totalAllowances": 155,
                    "totalDeductions": 0,
                    "overtimeHolidaysTotalValue": 3710.9090909090905,
                    "pensionInsAmount": 6629.99090909091,
                    "healthInsAmount": 2644.943181818182,
                    "additionalHealthInsAmount": 176.32954545454544,
                    "unemploymentInsAmount": 423.19090909090903,
                    "incomeTaxAmount": 3526.590909090909,
                    "netSalary": 21864.863636363632,
                    "deductions": [
                        {
                            "value": 0,
                            "id": "bd051c19-9a54-4d27-99c5-4862be7e813f",
                            "startDate": "2023-08-14T22:00:00.000Z"
                        }
                    ],
                    "effectiveNetSalary": 21864.863636363632,
                    "activeSalary": true,
                    "totalHoursWorked": 176,
                    "salaryPerHour": 178.4090909090909,
                    "payOnlyContributions": false,
                    "belongsToCurrentRerun": false,
                    "correctionPhase": false,
                    "selectedForRerun": false,
                    "updatedAt": "2023-09-28T12:57:16.191Z",
                    "dateUpdated": "2023-09-28 12:57 PM",
                    "createdAt": "2023-09-28T12:57:16.191Z",
                    "employee": {
                        "id": "13985eb3-1bae-4fb6-885a-e6821858e4aa",
                        "name": "Vlerant",
                        "surname": "Saiti",
                        "dateOfBirth": "2023-08-14T22:00:00.000Z",
                        "embg": "GX123",
                        "personalIdNumber": "GG123",
                        "passportNumber": "GG444",
                        "email": "vlerantsaiti@saiti.com",
                        "address": {
                            "country": "Austria",
                            "street": "BM200",
                            "city": "Copenhagen",
                            "state": "SFG",
                            "zip": "123"
                        },
                        "clientId": "122134bf-9cfc-45e3-aa04-04eefbfde93f",
                        "healthInsuranceFundLocalOfficeId": 10,
                        "documents": [],
                        "createdAt": "2023-08-15T12:42:43.742Z",
                        "updatedAt": "2023-09-27T07:59:04.001Z",
                        "employment": {
                            "id": "c3d32165-56ee-4638-8a0a-0e4fe5dd9243",
                            "employmentStartDate": "2023-08-14T22:00:00.000Z",
                            "employmentEndDate": "2023-08-14T22:00:00.000Z",
                            "weeklyWorkingHours": 40,
                            "businessUnit": "Sales",
                            "taxExemptionCodeId": 1,
                            "totalExperienceYears": null,
                            "totalExperienceMonths": null,
                            "totalExperienceDays": null,
                            "role": "Developer",
                            "employeeId": "13985eb3-1bae-4fb6-885a-e6821858e4aa",
                            "createdAt": "2023-08-15T12:42:43.758Z",
                            "updatedAt": "2023-09-27T07:59:04.005Z",
                            "typeOfExperienceId": 3
                        },
                        "salary": {
                            "id": "0c8dc603-eafb-4713-9b29-e6c0b5f08f80",
                            "employeeId": "13985eb3-1bae-4fb6-885a-e6821858e4aa",
                            "points": 1500,
                            "pointMoneyValue": 0,
                            "grossSalary": 31400,
                            "active": true
                        },
                        "deductions": [
                            {
                                "id": "bd051c19-9a54-4d27-99c5-4862be7e813f",
                                "employeeId": "13985eb3-1bae-4fb6-885a-e6821858e4aa",
                                "deductionMultiplier": null,
                                "totalDeductionAmount": 100,
                                "determinedDeductionAmountPerSala": 1,
                                "totalDeductionAmountLeft": 0,
                                "clientPartnerId": null,
                                "startDate": "2023-08-14T22:00:00.000Z",
                                "description": "deduction for..."
                            }
                        ],
                        "allowances": [
                            {
                                "type": "ALLOWANCE TYPE 1",
                                "id": "99e76e72-4ace-4034-8e36-e42d850573d5",
                                "employeeId": "13985eb3-1bae-4fb6-885a-e6821858e4aa",
                                "value": 155
                            }
                        ]
                    }
                },
                {
                    "id": "41270aa8-7e70-4f76-b4d5-f56db56931f4",
                    "payRunId": "f00cc3da-1526-4cdb-813b-0deb2b3779d0",
                    "employeeId": "ec786a3b-a634-4aa0-9584-86a839b35854",
                    "effectiveGross": 2074.5,
                    "baseGross": 1500,
                    "earnings": 574.5,
                    "experiencePay": 22.5,
                    "overtimeHours": 0,
                    "overtimeAmount": 0,
                    "publicHolidayHours": 0,
                    "publicHolidayAmount": 0,
                    "nightTimeHours": 0,
                    "nightTimeAmount": 0,
                    "sundayHours": 0,
                    "sundayAmount": 0,
                    "religiousHolidayHours": 0,
                    "religiousHolidayAmount": 0,
                    "shiftWorkHours": 0,
                    "shiftWorkAmount": 0,
                    "allowances": [
                        {
                            "value": 100
                        },
                        {
                            "value": 452
                        }
                    ],
                    "contributions": 788.31,
                    "days": 22,
                    "paySlips": [
                        {
                            "url": "https://api-accountx.intelory.com/api/client/122134bf-9cfc-45e3-aa04-04eefbfde93f/pay-run/f00cc3da-1526-4cdb-813b-0deb2b3779d0/file/pay-slip/ec786a3b-a634-4aa0-9584-86a839b35854.pdf",
                            "type": "PDF",
                            "name": "PaySlip.pdf"
                        }
                    ],
                    "totalAllowances": 552,
                    "totalDeductions": 0,
                    "overtimeHolidaysTotalValue": 0,
                    "pensionInsAmount": 390.006,
                    "healthInsAmount": 155.5875,
                    "additionalHealthInsAmount": 10.3725,
                    "unemploymentInsAmount": 24.894000000000002,
                    "incomeTaxAmount": 207.45,
                    "netSalary": 1286.19,
                    "deductions": [
                        {
                            "value": 0,
                            "id": "d3aad6e5-3a65-4b14-b43f-63865acc23e5",
                            "startDate": "2023-08-14T22:00:00.000Z"
                        }
                    ],
                    "effectiveNetSalary": 1286.19,
                    "activeSalary": true,
                    "totalHoursWorked": 176,
                    "salaryPerHour": 8.650568181818182,
                    "payOnlyContributions": false,
                    "belongsToCurrentRerun": false,
                    "correctionPhase": false,
                    "selectedForRerun": false,
                    "updatedAt": "2023-09-28T12:54:22.587Z",
                    "dateUpdated": "2023-09-28 12:51 PM",
                    "createdAt": "2023-09-28T12:54:22.587Z",
                    "employee": {
                        "id": "ec786a3b-a634-4aa0-9584-86a839b35854",
                        "name": "Erlind",
                        "surname": "Dauti",
                        "dateOfBirth": "1998-12-04T23:00:00.000Z",
                        "embg": "GH123",
                        "personalIdNumber": "GG123",
                        "passportNumber": "FS123",
                        "email": "dautierlind1@gmail.com",
                        "address": {
                            "country": "North Macedonia",
                            "street": "ST222",
                            "city": "Tetovo",
                            "municipality": "Градско",
                            "zip": "1111"
                        },
                        "clientId": "122134bf-9cfc-45e3-aa04-04eefbfde93f",
                        "healthInsuranceFundLocalOfficeId": 3,
                        "documents": [],
                        "createdAt": "2023-08-14T12:35:18.415Z",
                        "updatedAt": "2023-10-01T20:40:51.892Z",
                        "employment": {
                            "type": "EXTERNAL",
                            "id": "73ba58de-d65d-468a-9fae-475f9465665b",
                            "employmentStartDate": "0012-12-11T22:38:00.000Z",
                            "employmentEndDate": "2023-08-30T22:00:00.000Z",
                            "weeklyWorkingHours": 40,
                            "businessUnit": "Sales",
                            "taxExemptionCodeId": 1,
                            "totalExperienceYears": 3,
                            "totalExperienceMonths": 3,
                            "totalExperienceDays": 4,
                            "role": "Manager",
                            "employeeId": "ec786a3b-a634-4aa0-9584-86a839b35854",
                            "createdAt": "2023-08-14T12:35:18.422Z",
                            "updatedAt": "2023-10-01T20:40:51.901Z",
                            "typeOfExperienceId": 1
                        },
                        "salary": {
                            "id": "0da0747a-25ff-49f8-85ba-fc7b1389c06b",
                            "employeeId": "ec786a3b-a634-4aa0-9584-86a839b35854",
                            "points": 1,
                            "pointMoneyValue": 0,
                            "grossSalary": 1500,
                            "active": true
                        },
                        "deductions": [
                            {
                                "id": "7527202c-59c6-484d-98bc-5962b6b18c21",
                                "employeeId": "ec786a3b-a634-4aa0-9584-86a839b35854",
                                "deductionMultiplier": null,
                                "totalDeductionAmount": 542,
                                "determinedDeductionAmountPerSala": 100,
                                "totalDeductionAmountLeft": null,
                                "clientPartnerId": null,
                                "startDate": "2023-08-14T22:00:00.000Z",
                                "description": "test"
                            }
                        ],
                        "allowances": [
                            {
                                "type": "ALLOWANCE TYPE 1",
                                "id": "b51c9049-318d-4f3f-bb37-b9cddff84a28",
                                "employeeId": "ec786a3b-a634-4aa0-9584-86a839b35854",
                                "value": 452
                            },
                            {
                                "type": "ALLOWANCE TYPE 2",
                                "id": "b62b66dc-0c9a-49e8-a6d5-fb76d6f198b0",
                                "employeeId": "ec786a3b-a634-4aa0-9584-86a839b35854",
                                "value": 100
                            }
                        ]
                    }
                },
                {
                    "id": "14c1ce36-ec42-4d88-9c4e-b1cfcb82153c",
                    "payRunId": "f00cc3da-1526-4cdb-813b-0deb2b3779d0",
                    "employeeId": "a2c96c9a-f687-41ce-b796-0492f6acb663",
                    "effectiveGross": 35500,
                    "baseGross": 35000,
                    "earnings": 500,
                    "experiencePay": 0,
                    "overtimeHours": 0,
                    "overtimeAmount": 0,
                    "publicHolidayHours": 0,
                    "publicHolidayAmount": 0,
                    "nightTimeHours": 0,
                    "nightTimeAmount": 0,
                    "sundayHours": 0,
                    "sundayAmount": 0,
                    "religiousHolidayHours": 0,
                    "religiousHolidayAmount": 0,
                    "shiftWorkHours": 0,
                    "shiftWorkAmount": 0,
                    "allowances": [
                        {
                            "value": 500
                        }
                    ],
                    "contributions": 13490,
                    "days": 22,
                    "paySlips": [
                        {
                            "url": "https://api-accountx.intelory.com/api/client/122134bf-9cfc-45e3-aa04-04eefbfde93f/pay-run/f00cc3da-1526-4cdb-813b-0deb2b3779d0/file/pay-slip/a2c96c9a-f687-41ce-b796-0492f6acb663.pdf",
                            "type": "PDF",
                            "name": "PaySlip.pdf"
                        }
                    ],
                    "totalAllowances": 500,
                    "totalDeductions": 0,
                    "overtimeHolidaysTotalValue": 0,
                    "pensionInsAmount": 6674,
                    "healthInsAmount": 2662.5,
                    "additionalHealthInsAmount": 177.5,
                    "unemploymentInsAmount": 426,
                    "incomeTaxAmount": 3550,
                    "netSalary": 22010,
                    "deductions": [
                        {
                            "value": 0,
                            "id": "d75a58c5-53c6-4fed-bcbd-c67a02a2ed85",
                            "startDate": "2023-08-14T22:00:00.000Z"
                        }
                    ],
                    "effectiveNetSalary": 22010,
                    "activeSalary": true,
                    "totalHoursWorked": 176,
                    "salaryPerHour": 198.86363636363637,
                    "payOnlyContributions": false,
                    "belongsToCurrentRerun": false,
                    "correctionPhase": false,
                    "selectedForRerun": false,
                    "updatedAt": "2023-09-28T12:54:22.587Z",
                    "dateUpdated": "2023-09-28 12:55 PM",
                    "createdAt": "2023-09-28T12:54:22.587Z",
                    "employee": {
                        "id": "a2c96c9a-f687-41ce-b796-0492f6acb663",
                        "name": "Ilir",
                        "surname": "Limani",
                        "dateOfBirth": "1989-01-04T23:00:00.000Z",
                        "embg": "LM999",
                        "personalIdNumber": "LF123",
                        "passportNumber": "LL111",
                        "email": "limani@limani.com",
                        "address": {
                            "country": "North Macedonia",
                            "street": "MK999",
                            "city": "Krushevo",
                            "municipality": "Желино",
                            "zip": "1231"
                        },
                        "clientId": "122134bf-9cfc-45e3-aa04-04eefbfde93f",
                        "healthInsuranceFundLocalOfficeId": 14,
                        "documents": [],
                        "createdAt": "2023-08-15T13:07:55.861Z",
                        "updatedAt": "2023-09-15T11:43:55.634Z",
                        "employment": {
                            "id": "aeeeba78-8b1b-4d4f-b8ef-1dcea02f0350",
                            "employmentStartDate": "2023-08-14T22:00:00.000Z",
                            "employmentEndDate": "2024-01-08T23:00:00.000Z",
                            "weeklyWorkingHours": 40,
                            "businessUnit": "Developer",
                            "taxExemptionCodeId": 1,
                            "totalExperienceYears": null,
                            "totalExperienceMonths": null,
                            "totalExperienceDays": null,
                            "role": "Developer",
                            "employeeId": "a2c96c9a-f687-41ce-b796-0492f6acb663",
                            "createdAt": "2023-08-15T13:07:55.866Z",
                            "updatedAt": "2023-09-15T11:43:55.641Z",
                            "typeOfExperienceId": 1
                        },
                        "salary": {
                            "id": "a74a9720-f426-432d-a97a-82c59d1ae164",
                            "employeeId": "a2c96c9a-f687-41ce-b796-0492f6acb663",
                            "points": 1,
                            "pointMoneyValue": 0,
                            "grossSalary": 35000,
                            "active": true
                        },
                        "deductions": [
                            {
                                "id": "d75a58c5-53c6-4fed-bcbd-c67a02a2ed85",
                                "employeeId": "a2c96c9a-f687-41ce-b796-0492f6acb663",
                                "deductionMultiplier": null,
                                "totalDeductionAmount": 1200,
                                "determinedDeductionAmountPerSala": 100,
                                "totalDeductionAmountLeft": 0,
                                "clientPartnerId": null,
                                "startDate": "2023-08-14T22:00:00.000Z",
                                "description": "deduction..."
                            }
                        ],
                        "allowances": [
                            {
                                "type": "ALLOWANCE TYPE 1",
                                "id": "3f0279c4-5f5e-4d51-9aa5-986007b2e4a0",
                                "employeeId": "a2c96c9a-f687-41ce-b796-0492f6acb663",
                                "value": 500
                            }
                        ]
                    }
                },
                {
                    "id": "206b63df-1c0b-45c4-b430-a124cec30080",
                    "payRunId": "f00cc3da-1526-4cdb-813b-0deb2b3779d0",
                    "employeeId": "7719a6dd-164a-4623-ba08-220bb4df9a5f",
                    "effectiveGross": 23145,
                    "baseGross": 21000,
                    "earnings": 2145,
                    "experiencePay": 945,
                    "overtimeHours": 0,
                    "overtimeAmount": 0,
                    "publicHolidayHours": 0,
                    "publicHolidayAmount": 0,
                    "nightTimeHours": 0,
                    "nightTimeAmount": 0,
                    "sundayHours": 0,
                    "sundayAmount": 0,
                    "religiousHolidayHours": 0,
                    "religiousHolidayAmount": 0,
                    "shiftWorkHours": 0,
                    "shiftWorkAmount": 0,
                    "allowances": [
                        {
                            "value": 1200
                        }
                    ],
                    "contributions": 8795.1,
                    "days": 22,
                    "paySlips": [
                        {
                            "url": "https://api-accountx.intelory.com/api/client/122134bf-9cfc-45e3-aa04-04eefbfde93f/pay-run/f00cc3da-1526-4cdb-813b-0deb2b3779d0/file/pay-slip/7719a6dd-164a-4623-ba08-220bb4df9a5f.pdf",
                            "type": "PDF",
                            "name": "PaySlip.pdf"
                        }
                    ],
                    "totalAllowances": 1200,
                    "totalDeductions": 0,
                    "overtimeHolidaysTotalValue": 0,
                    "pensionInsAmount": 4351.26,
                    "healthInsAmount": 1735.875,
                    "additionalHealthInsAmount": 115.725,
                    "unemploymentInsAmount": 277.74,
                    "incomeTaxAmount": 2314.5,
                    "netSalary": 14349.9,
                    "deductions": [
                        {
                            "value": 0,
                            "id": "e50c2f92-b384-4da4-902c-2c3bc7e47c14",
                            "startDate": "2023-08-15T22:00:00.000Z"
                        }
                    ],
                    "effectiveNetSalary": 14349.9,
                    "activeSalary": true,
                    "totalHoursWorked": 176,
                    "salaryPerHour": 124.6875,
                    "payOnlyContributions": false,
                    "belongsToCurrentRerun": false,
                    "correctionPhase": false,
                    "selectedForRerun": false,
                    "updatedAt": "2023-09-28T12:54:22.587Z",
                    "dateUpdated": "2023-09-28 12:51 PM",
                    "createdAt": "2023-09-28T12:54:22.587Z",
                    "employee": {
                        "id": "7719a6dd-164a-4623-ba08-220bb4df9a5f",
                        "name": "Besart",
                        "surname": "Sefedini",
                        "dateOfBirth": "2023-08-15T22:00:00.000Z",
                        "embg": "BS999",
                        "personalIdNumber": "B111",
                        "passportNumber": "B123",
                        "email": "besbes@bes.com",
                        "address": {
                            "country": "North Macedonia",
                            "municipality": "Врапчиште",
                            "street": "SGF22",
                            "city": "Kumanovo",
                            "zip": "12300"
                        },
                        "clientId": "122134bf-9cfc-45e3-aa04-04eefbfde93f",
                        "healthInsuranceFundLocalOfficeId": 5,
                        "documents": [
                            {
                                "name": "PaySlip (7).pdf",
                                "type": "PDF",
                                "url": "https://api-accountx.intelory.com/api/accountant/5c2f9eef-5eb1-4f8c-bd5b-7faa5f593d04/file/54d10b76-459a-4ce1-8510-09de99257dee.pdf"
                            }
                        ],
                        "createdAt": "2023-08-16T10:14:33.215Z",
                        "updatedAt": "2023-09-15T11:42:30.928Z",
                        "employment": {
                            "id": "df526859-0b7d-4ee4-9f41-6617161c290d",
                            "employmentStartDate": "2023-08-15T22:00:00.000Z",
                            "employmentEndDate": "2023-12-14T23:00:00.000Z",
                            "weeklyWorkingHours": 40,
                            "businessUnit": "Sales",
                            "taxExemptionCodeId": 1,
                            "totalExperienceYears": 9,
                            "totalExperienceMonths": 1,
                            "totalExperienceDays": 10,
                            "role": "Developer",
                            "employeeId": "7719a6dd-164a-4623-ba08-220bb4df9a5f",
                            "createdAt": "2023-08-16T10:14:33.221Z",
                            "updatedAt": "2023-09-15T11:42:30.936Z",
                            "typeOfExperienceId": 2
                        },
                        "salary": {
                            "id": "2dfe6ae9-9f65-429f-a1d4-4f6dc18835a0",
                            "employeeId": "7719a6dd-164a-4623-ba08-220bb4df9a5f",
                            "points": 1,
                            "pointMoneyValue": 0,
                            "grossSalary": 21000,
                            "active": true
                        },
                        "deductions": [
                            {
                                "id": "e50c2f92-b384-4da4-902c-2c3bc7e47c14",
                                "employeeId": "7719a6dd-164a-4623-ba08-220bb4df9a5f",
                                "deductionMultiplier": null,
                                "totalDeductionAmount": 5000,
                                "determinedDeductionAmountPerSala": 1200,
                                "totalDeductionAmountLeft": 0,
                                "clientPartnerId": null,
                                "startDate": "2023-08-15T22:00:00.000Z",
                                "description": "test"
                            }
                        ],
                        "allowances": [
                            {
                                "type": "ALLOWANCE TYPE 1",
                                "id": "1d11767e-033e-4b9b-81a9-d58b114035d1",
                                "employeeId": "7719a6dd-164a-4623-ba08-220bb4df9a5f",
                                "value": 1200
                            }
                        ]
                    }
                },
                {
                    "id": "3fbc7173-1a88-4876-93c0-49b99caef250",
                    "payRunId": "f00cc3da-1526-4cdb-813b-0deb2b3779d0",
                    "employeeId": "49971cf6-0314-4789-95ba-409123926673",
                    "effectiveGross": 2029,
                    "baseGross": 1200,
                    "earnings": 829,
                    "experiencePay": 30,
                    "overtimeHours": 0,
                    "overtimeAmount": 0,
                    "publicHolidayHours": 0,
                    "publicHolidayAmount": 0,
                    "nightTimeHours": 0,
                    "nightTimeAmount": 0,
                    "sundayHours": 0,
                    "sundayAmount": 0,
                    "religiousHolidayHours": 0,
                    "religiousHolidayAmount": 0,
                    "shiftWorkHours": 0,
                    "shiftWorkAmount": 0,
                    "allowances": [
                        {
                            "value": 455
                        },
                        {
                            "value": 344
                        }
                    ],
                    "contributions": 771.02,
                    "days": 22,
                    "paySlips": [
                        {
                            "url": "https://api-accountx.intelory.com/api/client/122134bf-9cfc-45e3-aa04-04eefbfde93f/pay-run/f00cc3da-1526-4cdb-813b-0deb2b3779d0/file/pay-slip/49971cf6-0314-4789-95ba-409123926673.pdf",
                            "type": "PDF",
                            "name": "PaySlip.pdf"
                        }
                    ],
                    "totalAllowances": 799,
                    "totalDeductions": 0,
                    "overtimeHolidaysTotalValue": 0,
                    "pensionInsAmount": 381.45200000000006,
                    "healthInsAmount": 152.175,
                    "additionalHealthInsAmount": 10.145,
                    "unemploymentInsAmount": 24.348,
                    "incomeTaxAmount": 202.9,
                    "netSalary": 1257.98,
                    "deductions": [],
                    "effectiveNetSalary": 1257.98,
                    "activeSalary": true,
                    "totalHoursWorked": 176,
                    "salaryPerHour": 6.988636363636363,
                    "payOnlyContributions": false,
                    "belongsToCurrentRerun": true,
                    "correctionPhase": true,
                    "selectedForRerun": false,
                    "updatedAt": "2023-09-28T12:54:22.587Z",
                    "dateUpdated": "2023-10-02 11:16 AM",
                    "createdAt": "2023-09-28T12:54:22.587Z",
                    "employee": {
                        "id": "49971cf6-0314-4789-95ba-409123926673",
                        "name": "Veton",
                        "surname": "Kaso",
                        "dateOfBirth": "2023-09-11T22:00:00.000Z",
                        "embg": "VK123",
                        "personalIdNumber": "FK1231",
                        "passportNumber": "FF1231",
                        "email": "veton@gmail.com",
                        "address": {
                            "country": "Azerbaijan",
                            "state": "BNM123",
                            "street": "SF123",
                            "city": "Afders",
                            "zip": "1200"
                        },
                        "clientId": "122134bf-9cfc-45e3-aa04-04eefbfde93f",
                        "healthInsuranceFundLocalOfficeId": 1,
                        "documents": [],
                        "createdAt": "2023-09-12T09:24:25.539Z",
                        "updatedAt": "2023-09-21T10:02:40.289Z",
                        "employment": {
                            "type": "EXTERNAL",
                            "id": "c10e7ebb-e98a-4b95-8245-74cc74f14350",
                            "employmentStartDate": "2023-09-11T22:00:00.000Z",
                            "employmentEndDate": "2023-09-12T22:00:00.000Z",
                            "weeklyWorkingHours": 40,
                            "businessUnit": "Developer",
                            "taxExemptionCodeId": 3,
                            "totalExperienceYears": 5,
                            "totalExperienceMonths": 3,
                            "totalExperienceDays": 7,
                            "role": "Manager",
                            "employeeId": "49971cf6-0314-4789-95ba-409123926673",
                            "createdAt": "2023-09-12T09:24:25.545Z",
                            "updatedAt": "2023-09-21T10:02:40.293Z",
                            "typeOfExperienceId": 2
                        },
                        "salary": {
                            "id": "8aeee918-564a-4bbd-9956-cd2e2bd017cd",
                            "employeeId": "49971cf6-0314-4789-95ba-409123926673",
                            "points": null,
                            "pointMoneyValue": 0,
                            "grossSalary": 1200,
                            "active": null
                        },
                        "deductions": [],
                        "allowances": [
                            {
                                "type": "ALLOWANCE TYPE 1",
                                "id": "5e7d7cc7-90d9-4b02-a093-c123a68c3f14",
                                "employeeId": "49971cf6-0314-4789-95ba-409123926673",
                                "value": 455
                            },
                            {
                                "type": "ALLOWANCE TYPE 2",
                                "id": "603641f9-9c91-497f-bb8a-d7c07da6c217",
                                "employeeId": "49971cf6-0314-4789-95ba-409123926673",
                                "value": 344
                            }
                        ]
                    }
                }
            ]
        }
    }
    res.render('generate', { data:payRuns.data });
});

app.listen(4000, () => {
    console.log("Starting in http://localhost:4000");
});
