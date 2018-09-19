const isInBuilder = true;

function add() {
    layer.open({
        type: 1,
        title: '新增',
        area: ['600px', '350px'],
        skin: 'layui-layer-rim', //加上边框
        content: $('div.popup-window#add'),
        end: function () {
            $('div.popup-window#add form').trigger('reset');
        }
    });
}

function edit() {
    var popupEdit = function () {
        layer.open({
            type: 1,
            title: '修改',
            area: ['600px', '350px'],
            skin: 'layui-layer-rim', //加上边框
            content: $('div.popup-window#edit'),
            end: function () {
                $('div.popup-window#edit form').trigger('reset');
            }
        });
    };
    var setFormValues = function (selectedRow) {
        $('div.popup-window#edit form')
            .find('input:not([type=submit]), select')
            .each(function () {
                var field = $(this).attr('data-row-field') || $(this).attr('name');
                $(this).val(selectedRow[field]);
            })
    };
    if (isInBuilder) {
        popupEdit();
    } else {
        if (grids.length) {
            var selectedRows = grids[0].gridOptions.api.getSelectedRows();
            if (selectedRows.length == 0) {
                layer.msg('请选择需要修改的数据', { icon: 5 });
            } else if (selectedRows.length > 1) {
                layer.msg('只允许同时修改一条数据', { icon: 5 });
            } else {
                setFormValues(selectedRows[0]);
                popupEdit();
            }
        } else {
            layer.msg('请选择需要修改的数据', { icon: 5 });
        }
    }
}

function batchDelete() {
    var popupDelete = function () {
        layer.confirm('您确定需要删除吗？', {
            btn: ['确定', '取消']
        }, function () {
        }, function () {
        });
    };
    if (isInBuilder) {
        popupDelete();
    } else {
        if (grids.length) {
            var selectedRows = grids[0].gridOptions.api.getSelectedRows();
            if (selectedRows.length == 0) {
                layer.msg('请选择需要删除的数据', { icon: 5 });
            } else {
                popupDelete();
            }
        } else {
            layer.msg('请选择需要删除的数据', { icon: 5 });
        }
    }
}

export {
    add,
    edit,
    batchDelete
};