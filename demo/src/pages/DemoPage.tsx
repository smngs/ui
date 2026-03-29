import { EditorDemo } from "../demos/EditorDemo";

export function DemoPage() {
  return (
    <>
      <div className="section" id="demo">
        <h1>Demo</h1>
      </div>
      <div className="section" id="editor-demo">
        <h2>WYSIWYG Editor</h2>
        <EditorDemo />
      </div>
    </>
  );
}
