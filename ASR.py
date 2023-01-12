import streamlit as st
import whisper

st.title("Tivian AST Model")

audio_file = st.file_uploader("Upload Audio", type=["wav", "mp3"])

model = whisper.load_model("base")
st.text("AST Model Loaded")

if st.sidebar.button("Transcribe Audio"):
    if audio_file is not None:
        st.sidebar.success("Transcribing Audio")
        transcription = model.transcribe(audio_file.name)
        st.sidebar.success("Transcription Complete")
        st.markdown(transcription["text"])
    else:
        st.sidebar.error("Please upload an audio file")