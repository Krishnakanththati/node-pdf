const puppeteer = require('puppeteer');
var fs = require("fs");
var labels;
var options = {
    format: 'A4',
    landscape: true,
    headerTemplate: `<span></span>`,
    displayHeaderFooter: true,
    printBackground: true,
    margin: {
        bottom: 50,
        left: 20,
        right: 20,
        top: 30,
    }
};
const htmlData = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            padding: 20px;
            margin: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        table.main-table {
            width: 100%;
            /* max-width: 1020px; */
            margin: 0 auto;
        }

        .think-border {
            border: 2px solid #000;
        }

        .thin-border {
            border: 1px solid #000;
        }

        table {
            width: 100%;
            border-spacing: 0;
            border-collapse: collapse;
        }

        table td {
            padding: 0;
        }

        .border-tb {
            border-top: 1px solid #000;
            border-bottom: 2px solid #000;
        }

        .block-header {
            font-size: 14px;
            font-weight: 500;
            text-align: center;
            text-transform: uppercase;
            padding: 8px;
        }

        .body-content td {
            font-size: 12px;
            font-weight: 400;
            padding: 8px 6px;
        }

        .field-name {
            width: 18%;
            border-right: 1px solid;
            border-bottom: 1px solid;
        }

        .field-value {
            width: 32%;
            border-right: 1px solid;
            border-bottom: 1px solid;
        }

        .body-content .field-value {
            font-weight: 500;
        }

        td.amount-blocks,
        th.amount-blocks {
            padding: 0 !important;
        }

        .amount-blocks th:first-child,
        .amount-blocks td:first-child {
            width: 35%;
            border: 1px solid;
            border-bottom: none;
        }

        .amount-blocks th:last-child,
        .amount-blocks td:last-child {
            width: 65%;
            border-top: 1px solid;
        }

        .amount-blocks td:last-child {
            text-align: right;
        }

        .price-sub-header th {
            font-size: 12px;
            font-weight: 600;
            padding: 8px 6px;
        }

        .price-details td,
        .price-details th {
            text-align: center;
        }

        .dark-left {
            font-weight: 600 !important;
            text-align: left !important;
        }

        .sub-column-table {
            padding: 0 !important;
        }

        .sub-column-table td {
            border-bottom: 1px solid;
        }
    </style>
</head>

<body>
    <table class="main-table">
        <tr>
            <td>
                <table class="think-border">
                    <tr>
                        <td>
                            <table>
                                <tr>
                                    <th style="font-size: 13px;font-weight: 600;padding: 10px;">
                                        Booking Confirmation Invoice
                                    </th>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <table style="width: auto;">
                                <tr>
                                    <th style="width: 40px;"></th>
                                    <th style="width: 94px;">
                                        <img style="max-width: 90px;" src="https://ewheelers.com/assets/EW-Logo.png" alt="eWheelers Logo">
                                    </th>
                                    <th style="width: 40px;"></th>
                                    <th style="font-size: 13px;font-weight: 400;padding: 10px;">
                                        Bought on : eWheelers Mobility Solutions Private Limited
                                    </th>
                                    <th></th>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="height: 18px;"></td>
                    </tr>

                    <tr>
                        <td class="block-header">Dealer Details</td>
                    </tr>
                    <tr>
                        <td>
                            <table class="border-tb">
                                <tr>
                                    <th style="font-size: 14px;font-weight: 600;padding-top: 12px;">
                                        FRIENDS AUTO
                                    </th>
                                </tr>
                                <tr>
                                    <th style="font-size: 12px;font-weight: 400;padding-bottom: 12px;">
                                        11/23, GEETA COLONY, MAIN ROAD, DELHI-110031
                                    </th>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table class="body-content">
                                <tr>
                                    <td class="field-name">Booking Confirmation No:</td>
                                    <td class="field-value">MMYY/Invoice No.</td>
                                    <td class="field-name">DEALER'S EMAIL ID :</td>
                                    <td class="field-value">friends_yogi@yahoo.in</td>
                                </tr>
                                <tr>
                                    <td class="field-name">DEALER'S GST NO:</td>
                                    <td class="field-value">07BAMPS7175P1ZL</td>
                                    <td class="field-name">DEALER'S MOBILE NO :</td>
                                    <td class="field-value">9310088930</td>
                                </tr>
                                <tr>
                                    <td class="field-name">DATE OF SALE :</td>
                                    <td class="field-value">8th Oct 2022</td>
                                    <td class="field-name">DEALER'S CODE :</td>
                                    <td class="field-value">DLGTC01</td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td class="border-tb block-header">CUSTOMER'S DETAIL</td>
                    </tr>
                    <tr>
                        <td>
                            <table class="body-content">
                                <tr>
                                    <td class="field-name">CUSTOMER'S NAME: </td>
                                    <td class="field-value">TRAVELTECH Experiences Pvt. Ltd. </td>
                                    <td class="field-name">FATHER'S NAME : </td>
                                    <td class="field-value"></td>
                                </tr>
                                <tr>
                                    <td class="field-name">ADDRESS OF THE CUSTOMER : </td>
                                    <td class="field-value">
                                        1st, Plot No 2A, KH No 294, Kehra Singh State, Saidulajab, New Delhi, South
                                        Delhi, Delhi,
                                        110030
                                    </td>
                                    <td class="field-name sub-column-table">
                                        <table>
                                            <tr>
                                                <td>AADHAAR NO : </td>
                                            </tr>
                                            <tr>
                                                <td style="border: none;">PAN NO : </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td class="field-value sub-column-table">
                                        <table>
                                            <tr>
                                                <td>&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td style="border: none;">AAHCT2954N</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="field-name">MOBILE NO : </td>
                                    <td class="field-value">7827890726 </td>
                                    <td class="field-name">CHEQUE / DD / CASH : </td>
                                    <td class="field-value">Cash </td>
                                </tr>
                                <tr>
                                    <td class="field-name">EMAIL ID: </td>
                                    <td class="field-value">info@eveez.in </td>
                                    <td class="field-name">CASH / FINANCE </td>
                                    <td class="field-value">Cash </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td class="border-tb block-header">VEHICLE'S DETAIL</td>
                    </tr>
                    <tr>
                        <td>
                            <table>
                                <tr>
                                    <td>
                                        <table class="body-content">
                                            <tr>
                                                <td class="field-name">MODEL NAME: </td>
                                                <td class="field-value">JAUNTY+ </td>
                                                <td class="field-name">COLOUR: </td>
                                                <td class="field-value">White </td>
                                            </tr>
                                            <tr>
                                                <td class="field-name"> VIN NO : </td>
                                                <td class="field-value"> MD9PBXY1BDM355844 </td>
                                                <td class="field-name"> MOTOR NO: </td>
                                                <td class="field-value"> AMOMT60VDV1021 </td>
                                            </tr>
                                            <tr>
                                                <td class="field-name">CHARGER NO: </td>
                                                <td class="field-value"> </td>
                                                <td class="field-name"> CONTROLLER NO: </td>
                                                <td class="field-value">AMOCTV60VFD0615 </td>
                                            </tr>
                                            <tr>
                                                <td class="field-name"> BATTERY NO: </td>
                                                <td class="field-value">ATG00128G22 </td>
                                                <td class="field-name"> BATTERY CAPACITY: </td>
                                                <td class="field-value"> 2.4 KWH </td>
                                            </tr>
                                            <tr>
                                                <td class="field-name"> BATTERY TYPE : </td>
                                                <td class="field-value">LFP </td>
                                                <td class="field-name"> BATTERY NAME: </td>
                                                <td class="field-value">FUSION POWER SYSTEM </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <table class="body-content price-details">
                                            <tr class="price-sub-header">
                                                <th style="width: 54px;">S.No.</th>
                                                <th>DESCRIPTION OF GOODS </th>
                                                <th>HSN</th>
                                                <th>QTY</th>
                                                <th class="field-value amount-blocks">
                                                    <table>
                                                        <tr>
                                                            <th>RATE/UNIT</th>
                                                            <th>AMOUNT</th>
                                                        </tr>
                                                    </table>
                                                </th>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>ELECTRIC SCOOTER: JAUNTY + </td>
                                                <td>87031010</td>
                                                <td>1</td>
                                                <td class="field-value amount-blocks">
                                                    <table>
                                                        <tr>
                                                            <td>105200.00</td>
                                                            <td>105200.00</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>CGST 2.5% </td>
                                                <td></td>
                                                <td></td>
                                                <td class="field-value amount-blocks">
                                                    <table>
                                                        <tr>
                                                            <td></td>
                                                            <td>2630.00</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>SGST 2.5% </td>
                                                <td></td>
                                                <td></td>
                                                <td class="field-value amount-blocks">
                                                    <table>
                                                        <tr>
                                                            <td></td>
                                                            <td>2630.00</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>TOTAL AMOUNT </td>
                                                <td></td>
                                                <td></td>
                                                <td class="field-value amount-blocks">
                                                    <table>
                                                        <tr>
                                                            <td></td>
                                                            <td>110460.00</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>LESS : SUBSIDY FAME-2 </td>
                                                <td></td>
                                                <td></td>
                                                <td class="field-value amount-blocks">
                                                    <table>
                                                        <tr>
                                                            <td></td>
                                                            <td>36000.00</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>TOTAL AMOUNT AFTER DEDUCTING FAME-2 SUBSIDY </td>
                                                <td></td>
                                                <td></td>
                                                <td class="field-value amount-blocks">
                                                    <table>
                                                        <tr>
                                                            <td></td>
                                                            <td>74460.00</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <table class="body-content">
                                            <tr>
                                                <td class="dark-left">NET PAYABLE AMOUNT (EX-SHOWROOM TO CUSTOMER) </td>
                                                <td></td>
                                                <td></td>
                                                <td class="field-value amount-blocks">
                                                    <table>
                                                        <tr>
                                                            <td style="border-left-color: transparent;"></td>
                                                            <td class="dark-left"
                                                                style="text-align: center !important;">74460.00
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <table class="body-content">
                                            <tr>
                                                <td class="dark-left">
                                                    RUPEES IN WORDS- Seventy Four Thousand Four Hundred Sixty rupees
                                                    only
                                                </td>
                                                <td></td>
                                                <td></td>
                                                <td class="field-value amount-blocks">
                                                    <table>
                                                        <tr>
                                                            <td>GRAND TOTAL</td>
                                                            <td>74460.00</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <table class="body-content">
                                            <tr>
                                                <td></td>
                                                <td class="dark-left">
                                                    Less : Booking Amount
                                                </td>
                                                <td></td>
                                                <td></td>
                                                <td class="field-value amount-blocks">
                                                    <table>
                                                        <tr>
                                                            <td></td>
                                                            <td>500.00</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <table class="body-content">
                                            <tr>
                                                <th style="width: 54px;"></th>
                                                <td class="dark-left">
                                                    Balance Payable at the time of delivery
                                                </td>
                                                <td></td>
                                                <td></td>
                                                <td class="field-value amount-blocks">
                                                    <table>
                                                        <tr>
                                                            <td></td>
                                                            <td>73960.00</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <table class="body-content">
                                            <tr>
                                                <td class="dark-left">
                                                    RUPEES IN WORDS- Seventy Three Thousand Nine Hundered and Sixty
                                                    Rupees Only
                                                </td>
                                                <td></td>
                                                <td></td>
                                                <td class="field-value amount-blocks">
                                                    <table>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                            <td>&nbsp;</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        <tr>
            <td style="padding-top: 18px;">
                <table class="body-content">
                    <tr>
                        <td>1. GOODS ONCE SOLD WILL NOT BE TAKEN BACK. </td>
                    </tr>
                    <tr>
                        <td>2. ALL DISPUTES SUBJECT TO XXXX JURISDICTION. </td>
                    </tr>
                    <tr>
                        <td>3. RTO REGISTRATION, HSRP NUMBER PLATE, INSURANCE, HELMET WILL BE CHARGED EXTRA </td>
                    </tr>
                    <tr>
                        <td>4. PRODUCT WARRANTY IS VALID ON COMPLIANCE OF PERIODIC MAINTENANCE AS PER THE OWNER'S
                            MANUAL, ELSE VOID. </td>
                    </tr>
                    <tr>
                        <td>5. ANY DAMAGE OR DEFECT OBSERVED AFTER PURCHASE SHALL BE RECTIFIED AT CUSTOMER'S OWN COST.
                        </td>
                    </tr>
                    <tr>
                        <td>6. ALL WARRANTY TERMS AND CONDITIONS APPLICABLE AS PER OWNER'S MANUAL OF VEHICLE. </td>
                    </tr>
                    <tr>
                        <td>7. BATTERY'S PERFORMANCE & CAPACITY (AH) DECREASES OVER A PERIOD OF TIME, DUE TO ITS
                            CHEMICAL COMPOSITION & NATURE. </td>
                    </tr>
                    <tr>
                        <td>8. READ THE OWNER'S MANUAL AND FOLLOW ITS INSTRUCTIONS & GUIDELINES FOR BETTER RESULT AND
                            BEST PERFORMANCE. </td>
                    </tr>
                </table>
            </td>
        </tr>

        <tr>
            <td style="padding-top: 18px;">
                <table class="body-content">
                    <tr>
                        <th style="font-size: 11px;text-align: left">DISCLAIMER: </th>
                    </tr>
                    <tr>
                        <td>1. This invoice is generated and issued on behalf of and under the instructions of the
                            Merchant mentioned in this invoice. </td>
                    </tr>
                    <tr>
                        <td>2. The goods sold as part of this shipment are intended for end user consumption and not for
                            re-sale. </td>
                    </tr>
                    <tr>
                        <td>3. Reverse charges are not applicable. </td>
                    </tr>
                    <tr>
                        <td>4. Trendsutra Platform Services Private Limited is not an agent and shall not be deemed to
                            be construed as an agent of Merchant. </td>
                    </tr>
                    <tr>
                        <td>5. The goods described in this invoice are sold to the Customer by the Merchant and not by
                            Trendsutra Platform Services Private Limited . </td>
                    </tr>
                    <tr>
                        <td>6. Trendsutra Platform Services Private Limited has merely facilitated the sale and purchase
                            between the Merchant and the Customer and the Merchant is responsible and liable for all the
                            warranties, quality, merchantability etc. of the goods mentioned herein. </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td style="padding-top: 18px;">
                <table class="body-content">
                    <tr>
                        <td style="font-size: 14px;font-weight: 600;text-align: center;padding: 10px;width: 55%;">
                            Have a question? Our 9x7 customer service is here to help you on
                            <br> 022 6157 6157 from 10:00 AM to 7:00 PM.
                        </td>

                        <td>
                            <table>
                                <tr>
                                    <td>
                                        <div style="border: 1px solid #ddd;padding: 13px;max-width: 400px;">
                                            <div style="height: 50px;"></div>
                                            <p style="margin: 0;text-align: center;">
                                                SIGNATURE FOR CUSTOMER SALE INVOICE ONLY
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Digital Signature Of The Merchant's Authorized <br> Representative
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

    </table>
</body>

</html>


<!-- <tr>
    <td class="field-name"> </td>
    <td class="field-value"> </td>
    <td class="field-name"> </td>
    <td class="field-value"> </td>
</tr> -->`;
const pdfHelper = {
    generatePdfReport: async (req, res) => {
        console.log('api req');
        try {
            try {
                const browser = await puppeteer.launch({
                    headless: true,
                    executablePath: process.env.CHROME_BIN || null,
                    args: ['--no-sandbox', '--headless', '--disable-gpu', '--disable-dev-shm-usage', '--disable-setuid-sandbox']
                });
            } catch (error) {
                res.status(500).send({ error: true, message: "Error while puppeteer.launch", status_code: 106, result: error });
            }
            const pdfPage = await browser.newPage();
            await pdfPage.setDefaultNavigationTimeout(0);
            await pdfPage.setContent(htmlData);
            const pdfStream = await pdfPage.createPDFStream(options);
            const fileName = 'Invoice_' + 'new345463' + '.pdf';
            res.set({
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/pdf',
                'Content-disposition': 'attachment; filename=' + fileName,
            });
            pdfStream.pipe(res);
            pdfStream.on('end', async function () {
                let pages = await browser.pages();
                await Promise.all(pages.map(page => page.close()));
                await browser.close();
            });
            pdfStream.on('error', function (uErr) {
                res.status(500).send({ error: true, message: "Pdf creation Error", status_code: 106, result: uErr });
            });
        } catch (error) {
            res.status(500).send({ error: true, message: "Pdf creation Error", status_code: 106, result: error });
        }
    }
}
module.exports = { pdfHelper };