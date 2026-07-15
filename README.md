# SSRVM — AI-Powered Companion for Student Stress & Emotion Detection (Flask)

SSRVM is a supportive mentor-style web app for students:
- Private journaling
- CBT-style thought reframing
- Grounding & breathing tools
- Supportive **Chat** assistant that suggests what to do, how to distract, and coping strategies
- Optional **Counsellor request** stored privately in the database

> **Disclaimer**: SSRVM is **not** a medical device and does not provide diagnosis or crisis intervention. If you are in danger or considering self-harm, contact local emergency services immediately.

## Quickstart

1. **Prereqs**: Python 3.10+
   ```
2. Install deps:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the app:
   ```bash
   python app.py
   ```
4. Open http://127.0.0.1:5000

## Notes

- Data stored locally in `data/ssrvm.db` (SQLite).
- You can export your journal as CSV from **Profile**.
- Chat assistant is local & rule-based (no external APIs).
