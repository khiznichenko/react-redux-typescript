// for style loader
declare module '*.css' {
  const styles: any;
  export = styles;
}

// for svg inline loader
declare module '*.svg' {
  const content: string;
  export = content;
}
