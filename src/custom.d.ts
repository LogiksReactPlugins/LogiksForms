declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module "tinymce/tinymce";
declare module "tinymce/icons/default";
declare module "tinymce/themes/silver";

declare module "tinymce/plugins/lists";
declare module "tinymce/plugins/link";
declare module "tinymce/plugins/image";
declare module "tinymce/plugins/table";
declare module "tinymce/plugins/code";
declare module "tinymce/models/dom"