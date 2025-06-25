import { renderVideo } from "@revideo/renderer";
import { sample } from "./sample";

async function render(projectData: any) {
  console.log("Rendering video...");

  // This is the main function that renders the video
  const file = await renderVideo({
    projectFile: "./src/project.ts",
    variables: projectData,
    settings: {
      logProgress: true,
      outFile: "output.mp4",
      projectSettings: {
        exporter: {
          name: "@revideo/core/wasm",
        },
      },
    },
  });
  console.log(`Rendered video to ${file}`);
  return file;
}

render(sample);
