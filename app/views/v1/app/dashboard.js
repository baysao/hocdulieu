define([app_model + "/app"], function ($app) {
  var scope;
  var _layout = {};
  return {
    $ui: _layout,
    $oninit: function (_view, _scope) {
      scope = _scope;
    },
  };
});
