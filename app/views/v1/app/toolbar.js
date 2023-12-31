define([app_model + "/menu_profile"], function (model_menu_profile) {
  var scope;

  var _layout = {
    view: "toolbar",
    height: 50,
    elements: [
      {
        view: "button",
        type: "image",
        css: "webix_transparent",
        image: app_asset + "/images/logo/logo.png",
        width: 80,
      },
      {
        template: "<p style='font-size:large;font-weight:bold;'>Massbit</p>",
        width: 100,
        borderless: true,
      },
      {},
      {
        view: "button",
        width: 80,
        // badge: 1,
        type: "icon",
        icon: "mdi mdi-bell",
        label: "Notification",
      },

      {
        view: "icon",
        icon: "mdi mdi-account",
        popup: {
          view: "contextmenu",
          data: model_menu_profile,
          on: {
            onMenuItemClick(id) {
              if (id === "signout") {
              } else scope.show("./settings/$" + id);
            },
          },
        },
      },
    ],
  };

  return {
    $ui: _layout,
    $oninit: function (_view, _scope) {
      scope = _scope;
    },
  };
});
