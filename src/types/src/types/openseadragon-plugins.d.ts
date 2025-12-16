import OpenSeadragon from "openseadragon";

declare module "openseadragon" {
  interface Viewer {
    scalebar?: any;
    svgOverlay?: any;

    Tools?: any;
    toolsInstance?: any;

    SlideTours?: any;
    slideToursInstance?: any;
  }

  export const SvgOverlay: any;
}
