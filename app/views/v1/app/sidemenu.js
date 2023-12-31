define([app_model + "/side_menu"], function (model_side_menu) {
  var scope;

  var _menu = {
    view: "menu",
    layout: "y",
    scroll: "y",
    width: 200,
    select: true,
    data: model_side_menu,
    on: {
      onMenuItemClick: function (id) {
       scope.show("./$" + id);
      },
    },
  };

  var _layout = {
    rows: [
      _menu,
    ],
  };
  return {
    $ui: _layout,
    $oninit: function (_view, _scope) {
      scope = _scope;
    },
  };
});
