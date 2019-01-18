function openModal(modal) {
    $(".group-modal").eq(modal).fadeIn(300);
};

function closeModal(modal) {
    console.log("Closing modal #: " + modal);
    $(".group-modal").eq(modal).fadeOut(300);
};

function createGroup() {
    groupName = $("#group-name").val();
    groupMembers = [];
    $.each($(".ui.label.transition.visible"), function (index) {
        groupMembers[index] = $(this).attr("data-value");
        console.log(groupMembers[index]);
    });
    numMembers = groupMembers.length;
    alert("New group: " + groupName + " successfully created with " + numMembers + " members.");

    closeModal(1);
//    addGroupCircle(groupName, groupMembers);
    document.getElementById("createGroupForm").reset();
    $(".delete").click();
};

function addGroupCircle(name, people) {
    length = $(".group-circle").length;
    newCircle = $("#blank-circle").clone()
    $("#blank-circle").clone().insertAfter($(".group-circle").eq(length - 1));
    length = $(".group-circle").length;
    newCircle = $(".group-circle").eq(length - 1);
    newCircle.removeAttr("id");
    newCircle.addClass("circle");
    newCircle.children().eq(0).html("<p>" + name + "</p>");
    $.each(people, function (index) {
        member = people[index];
        console.log("Adding member: " + member);
        switch (member) {
            case "boo":
                $("#boo").clone().insertAfter($(".group-circle").eq(length - 1));
                break;
            case "link":
                $("#link").clone().insertAfter($(".group-circle").eq(length - 1));
                break;
            case "lsp":
                $("#lsp").clone().insertAfter($(".group-circle").eq(length - 1));
                break;
            case "ness":
                $("#ness").clone().insertAfter($(".group-circle").eq(length - 1));
                break;
            default:
                return;
        }
    });
};
