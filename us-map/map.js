$(document).ready(function () {
    $('#map').usmap({
        // Set up default styles
        'stateStyles': {
            'fill': 'lightgrey',
            'stroke-width': .25,
        },
        stateHoverStyles: {
            fill: 'lightgrey'
        },
        showLabels: false,
        stateSpecificStyles: {
            'TX': {
                fill: 'rgba(255, 223, 71, 1)'
            },
            'PA': {
                fill: '#FFDF47'
            },
            'NY': {
                fill: '#FFDF47'
            },
            'GA': {
                fill: '#FFDF47'
            },
            'NC': {
                fill: '#FFDF47'
            },
            'DC': {
                fill: '#FFDF47'
            },
            'CA': {
                fill: '#FFDF47'
            },
            'WA': {
                fill: '#FFDF47'
            }
        },
        stateSpecificHoverStyles: {
            'TX': {
                fill: '#43C6AC'
            },
            'PA': {
                fill: '#43C6AC'
            },
            'NY': {
                fill: '#43C6AC'
            },
            'GA': {
                fill: '#43C6AC'
            },
            'NC': {
                fill: '#43C6AC'
            },
            'DC': {
                fill: '#43C6AC'
            },
            'CA': {
                fill: '#43C6AC'
            },
            'WA': {
                fill: '#43C6AC'
            }
        },
        // Events
        mouseover: function (event, data) {
            var x = event.clientX;
            var y = event.clientY;
            stateHovered(data.name, x, y);
        },
        //            'NY': function (event, data) {
        //                console.log("NY is currently highlighted");
        //            },
        //            'PA': function (event, data) {
        //                console.log("PA is currently highlighted");
        //            },
        //            'TX': function (event, data) {
        //                var x = event.clientX;
        //                var y = event.clientY;
        //                console.log("X: " + x + " Y: " + y);
        //                var newX = x - 60;
        //                var newY = y - 60;
        //                $("#hovermenu").toggle(1000);
        //                $("#hove
        //                $("#hovermenu").css("transform", "translate3d(360px, -140px, 0px)");
        //            }
        click: function (event, data) {
            stateClicked(data.name);
        },
        mouseout: function (event, data) {
            // If cursor is no longer on the state AND not on the hover menu thing, hide the hover menu
            $("#hovermenu").html("");
            $("#hovermenu").css("display", "none");
        }
    });
    //    var texas = $("#map").find("path[d='M357.05332,333.3739L379.74411,334.45984L410.8368,335.60296L408.50219,359.05876L408.20543,377.21228L408.27357,379.29407L412.6174,383.1125L414.35405,383.93466L416.16326,384.18747L416.84913,382.93225L417.73945,383.79837L419.47609,384.2798L421.08086,383.54998L422.21956,383.95885L421.92279,387.364L426.19848,388.39501L428.8738,389.21718L432.82854,389.74256L435.02242,391.57154L438.27152,389.99537L441.05896,390.36028L443.09237,393.14772L444.16733,393.46868L444.00686,395.43395L447.09547,396.60124L449.86312,394.79644L451.37114,395.16136L453.72552,395.32184L454.15859,397.19478L458.79918,399.18423L461.45473,398.9798L463.4442,394.86459L463.78492,394.86459L464.92804,396.76172L469.3642,397.76853L472.7012,398.9798L475.99425,399.73382L478.14419,398.9798L478.99053,396.46496L482.69245,396.46496L484.58958,397.21896L487.654,395.64279L488.31569,395.64279L488.6806,396.76172L492.95629,396.76172L495.35904,395.5065L497.02754,395.80326L498.44324,397.67621L501.32299,399.34471L504.84467,400.41968L507.58814,401.83759L510.03484,403.45991L513.32788,402.56962L515.26897,403.55225L515.78008,413.69188L516.11532,423.39405L516.80118,432.92806L517.32658,436.97511L520.00191,441.57175L521.07687,445.63859L524.93927,451.92792L525.48884,454.80769L526.01424,455.8145L525.32836,463.31069L522.67723,467.69847L523.63568,470.55845L523.27076,473.0733L522.42442,480.38923L521.05268,483.10852L521.65692,487.49475L515.99204,489.07993L506.13075,493.60643L505.16079,495.54635L502.57422,497.48628L500.47264,498.94122L499.17935,499.74952L493.52124,505.08432L490.77301,507.18591L485.43821,510.41911L479.7801,512.84402L473.47534,516.23889L471.69708,517.69384L465.8773,521.25037L462.48243,521.89701L458.60258,527.39346L454.56107,527.71679L453.5911,529.65671L455.85435,531.59664L454.3994,537.09309L453.10612,541.61959L451.9745,545.49944L451.1662,550.02593L451.9745,552.45084L453.75276,559.40224L454.72273,565.54533L456.50099,568.29356L455.53103,569.74851L452.45948,571.68843L446.80136,567.80858L441.30491,566.67696L440.01162,567.16194L436.77841,566.5153L432.57524,563.44375L427.40211,562.31213L419.80406,558.91726L417.70248,555.0374L416.40919,548.57099L413.17599,546.63106L412.52934,544.36781L413.17599,543.72117L413.49931,540.3263L412.20602,539.67966L411.55938,538.7097L412.85266,534.34486L411.23606,532.08162L408.00285,530.78833L404.60798,526.4235L401.05145,519.79542L396.84828,517.20885L397.00994,515.26893L391.67514,502.98273L390.86684,498.77956L389.08858,496.83964L388.92692,495.38469L382.94548,490.0499L380.35891,486.97835L380.35891,485.84672L377.77234,483.74514L370.9826,482.61351L363.54622,481.96687L360.47467,479.70363L355.94818,481.48189L352.39165,482.93684L350.1284,486.17004L349.15844,489.88824L344.79361,496.03133L342.3687,498.45624L339.78213,497.48628L338.00387,496.35465L336.06394,495.70801L332.18409,493.44477L332.18409,492.79812L330.40583,490.8582L325.23269,488.75661L317.79631,480.99691L315.53306,476.30876L315.53306,468.22573L312.29985,461.75931L311.81487,459.01109L310.19827,458.04112L309.06664,455.93954L304.05517,453.83795L302.76189,452.22135L295.64882,444.29998L294.35554,441.06677L289.66738,438.80352L288.21243,434.43865L285.62584,431.52878L283.68593,431.04382L283.0367,426.36618L291.03857,427.05207L320.07356,429.79552L349.10864,431.39588L351.39487,407.61912L355.28142,352.0641L356.88181,333.31678L358.25355,333.34536M457.2302,567.32304L456.66439,560.20996L453.91615,553.01604L453.35033,545.98379L454.88611,537.73908L458.20017,530.86849L461.67587,525.45284L464.82827,521.89629L465.47491,522.13879L460.70591,528.76689L456.34107,535.31417L454.3203,541.94226L453.99698,547.11542L454.88611,553.25854L457.47269,560.45246L457.95767,565.6256L458.11933,567.08056L457.2302,567.32304Z']");
});


/* Function to show options when a state with no prior data has been clicked:
    1. Add a job located in this state
    2. Add facts associated with this state
    3. Add pros/cons associated with this state
    etc...
*/
function blankState(state) {

}

function getStateInfo(state) {
    var stateInfo;
    var formattedStateInfo = "";
    var prosList = "<b>Pros:</b><ul>";
    switch (state) {
        case 'TX':
            stateInfo = stateData[0];
        case 'NY':
            stateInfo = stateData[1];
            break;
    }
    $.each(stateInfo.pros, function (index, value) {
        prosList += "<li>" + value + "</li>";
    });
    prosList += "</ul>";
    formattedStateInfo = "<h3>" + stateInfo.label + "</h3><b>Population:</b> " + stateInfo.population + "<br/>" + prosList;
    return formattedStateInfo;
}

function stateHovered(state, x, y) {
    if (statesOfInterest.includes(state)) {
        var info = getStateInfo(state);
        $("#hovermenu").html(info);
        switch (state) {
            case 'TX':
                $("#hovermenu").css("transform", "translate3d(360px, -140px, 0px)");
                $("#hovermenu").css("display", "block");
                break;
            case 'NY':
                console.log("X: " + x + " Y: " + y);
                $("#hovermenu").css("transform", "translate3d(660px, -380px, 0px)");
                $("#hovermenu").css("display", "block");
                break;
        }
    } else {
        console.log("Not interested lol");
    }
}

/* Function to show the appropriate data for the */
function stateClicked(state) {
    console.log(state + " was clicked");
    switch (state) {
        case 'NY':
            break;
        case 'PA':
            break;
        case 'GA':
            break;
        case 'NC':
            break;
        case 'TX':
            break;
        case 'CA':
            break;
        case 'WA':
            break;
        default:
            blankState(state);
    }
}
