var FormValidation = function () {
    var e = function () {
        var e = $("#form-validation"), r = $(".alert-danger", e), i = $(".alert-success", e);
        e.validate({
            errorElement: "span",
            errorClass: "help-block help-block-error",
            focusInvalid: !1,
            ignore: "",
            messages: {
            },
            rules: {
                full_name: {required: !0},
                email: {required: !0, email: !0},
                phone: {required: !0, number: !0},
                gender: {required: !0},
                city_id: {required: !0},
                lead_source_id: {required: !0},
                lead_status_id: {required: !0},
            },
            invalidHandler: function (e, t) {
                i.hide(), r.show(), App.scrollTo(r, -200)
            },
            errorPlacement: function (e, r) {
                var i = $(r).parent(".input-group");
                i.size() > 0 ? i.after(e) : r.after(e)
            },
            highlight: function (e) {
                $(e).closest(".form-group").addClass("has-error")
            },
            unhighlight: function (e) {
                $(e).closest(".form-group").removeClass("has-error")
            },
            success: function (e) {
                e.closest(".form-group").removeClass("has-error")
            },
            submitHandler: function (e) {
                i.show(), r.hide()
                return true;
            }
        })
    }
    return {
        init: function () {
            e()
        }
    }
}();
jQuery(document).ready(function () {
    FormValidation.init()
});