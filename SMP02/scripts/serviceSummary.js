(function (global) {
    var ServiceSummaryViewModel,
        app = global.app = global.app || {};

    ServiceSummaryViewModel = kendo.data.ObservableObject.extend({
        serviceSummaryDataSource: null,

        init: function () {
            var that = this,
                dataSource;

            kendo.data.ObservableObject.fn.init.apply(that, []);

            dataSource = new kendo.data.DataSource({
                transport: {
                    read: {
                        url: "data/services.json",
                        dataType: "json"
                    }
                }
            });

            that.set("serviceSummaryDataSource", dataSource);
        }
    });

    app.serviceSummary = {
        viewModel: new ServiceSummaryViewModel()
    };
})(window);