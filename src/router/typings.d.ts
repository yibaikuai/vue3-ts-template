import "vue-router";
declare module "vue-router" {
    interface RouteMeta {  // 为vue-router自定义一个RouteMeta的接口? 为什么要自定义一个RouteMeta的接口?
        // options
        title?: string;
        // every route must declare
        show?: boolean; //
    }
}