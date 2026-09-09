"use client";

import * as React from "react";
import { Upload, FileText, CheckCircle2, Loader2 } from "lucide-react";

const FileUploadComponent: React.FC = () => {
  const [fileName, setFileName] = React.useState("");
  const [uploading, setUploading] = React.useState(false);
  const [uploaded, setUploaded] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleFileUploadButtonClick = () => {
    const input = document.createElement("input");

    input.type = "file";
    input.accept = "application/pdf";

    input.addEventListener("change", async () => {
      if (!input.files || input.files.length === 0) return;

      const file = input.files[0];

      console.log("dfdf", file);

      setFileName(file.name);
      setUploading(true);
      setUploaded(false);
      setError("");

      try {
        const formData = new FormData();
        formData.append("pdf", file);

        const API_URL = process.env.NEXT_PUBLIC_API_URL;

        const response = await fetch(`${API_URL}/upload/pdf`, {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Upload failed");
        }

        setUploaded(true);
      } catch (err) {
        console.error(err);
        setError("Failed to upload PDF. Please try again.");
      } finally {
        setUploading(false);
      }
    });

    input.click();
  };

  return (
    <div className="flex h-full items-center justify-center p-8">
      <div
        onClick={!uploading ? handleFileUploadButtonClick : undefined}
        className="w-full max-w-md cursor-pointer rounded-2xl border-2 border-dashed border-slate-300 bg-white p-10 text-center shadow-lg transition hover:border-slate-500 hover:shadow-xl"
      >
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
          {uploading ? (
            <Loader2 className="h-8 w-8 animate-spin text-slate-700" />
          ) : uploaded ? (
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          ) : (
            <Upload className="h-8 w-8 text-slate-700" />
          )}
        </div>

        {uploading ? (
          <>
            <h3 className="text-lg font-semibold text-slate-800">
              Uploading PDF...
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Processing your document
            </p>
          </>
        ) : uploaded ? (
          <>
            <h3 className="text-lg font-semibold text-green-700">
              PDF uploaded successfully
            </h3>

            <p className="mt-2 flex items-center justify-center gap-2 text-sm text-slate-500">
              <FileText className="h-4 w-4" />
              {fileName}
            </p>

            <p className="mt-3 text-xs text-slate-400">
              You can now ask questions about your document
            </p>
          </>
        ) : (
          <>
            <h3 className="text-lg font-semibold text-slate-800">
              Upload your PDF
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Select a PDF document to start chatting with it
            </p>

            <button
              type="button"
              className="mt-6 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              Choose PDF
            </button>

            <p className="mt-3 text-xs text-slate-400">PDF files only</p>
          </>
        )}

        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
      </div>
    </div>
  );
};

export default FileUploadComponent;
