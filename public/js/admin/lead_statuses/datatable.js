var TableDatatablesAjax = function () {
    var a = function () {
        $(".date-picker").datepicker({rtl: App.isRTL(), autoclose: !0})
    };

    e = function () {
        var a = new Datatable;
        a.init({
            src: $("#datatable_ajax"), onSuccess: function (a, e) {
            }, onError: function (a) {
            }, onDataLoad: function (a) {
            }, loadingMessage: "Loading...", dataTable: {
                bStateSave: !0,
                fnStateSaveParams: function (a, e) {
                    return $("#datatable_ajax tr.filter .form-control").each(function () {
                        e[$(this).attr("name")] = $(this).val()
                    }), e
                },
                fnStateLoadParams: function (a, e) {
                    return $("#datatable_ajax tr.filter .form-control").each(function () {
                        var a = $(this);
                        e[a.attr("name")] && a.val(e[a.attr("name")])
                    }), !0
                },
                lengthMenu: [[10, 25, 50, 100], [10, 25, 50, 100]],
                pageLength: 10,
                "columns": [
                    { "data": "id","bSortable": false },
                    { "data": "name" },
                    { "data": "actions","bSortable": false }
                ],
                ajax: {
                    // url: "../demo/table_ajax.php",
                    url: route('admin.lead_statuses.datatable'),
                    'beforeSend': function (request) {
                        request.setRequestHeader("X-CSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
                    }
                },
                ordering: !1,
                order: [[1, "asc"]]
            }
        }), a.getTableWrapper().on("click", ".table-group-action-submit", function (e) {
            e.preventDefault();
            var t = $(".table-group-action-input", a.getTableWrapper());
            "" != t.val() && a.getSelectedRowsCount() > 0 ? (a.setAjaxParam("customActionType", "group_action"), a.setAjaxParam("customActionName", t.val()), a.setAjaxParam("id", a.getSelectedRows()), a.getDataTable().ajax.reload(), a.clearAjaxParams()) : "" == t.val() ? App.alert({
                type: "danger",
                icon: "warning",
                message: "Please select an action",
                container: a.getTableWrapper(),
                place: "prepend"
            }) : 0 === a.getSelectedRowsCount() && App.alert({
                type: "danger",
                icon: "warning",
                message: "No record selected",
                container: a.getTableWrapper(),
                place: "prepend"
            })
        })
    };

    return {
        init: function () {
            a(), e();
        }
    }
}();
jQuery(document).ready(function () {
    TableDatatablesAjax.init()
});