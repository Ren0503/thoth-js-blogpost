import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const TextToSpeech = ({ text }) => {
    const [volume, setVolume] = useState(1);
    let speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.volume = volume;

    const start = () => {
        window.speechSynthesis.speak(speech);
    };

    const pause = () => {
        window.speechSynthesis.pause();
    };

    const resume = () => {
        window.speechSynthesis.resume();
    };

    const cancel = () => {
        window.speechSynthesis.cancel();
    };
    console.log(speech.volume);

    return (
        <div className="voice">
            <Row>
                <Col md={6} style={{ marginTop: '8px' }}>
                    <i className="fas fa-volume-mute mx-2"></i>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        value={volume}
                        step="1"
                        class="slider"
                        onChange={(e) => setVolume(e.target.value)}
                    />
                    <i className="fas fa-volume-up mx-2"></i>
                </Col>
                <Col md={6}>
                    <button onClick={start} class="btn-voice btn-voice-success"><i className="fas fa-microphone"></i></button>
                    <button onClick={pause} class="btn-voice btn-voice-warning"><i className="fas fa-pause"></i></button>
                    <button onClick={resume} class="btn-voice btn-voice-info"><i className="fas fa-play"></i></button>
                    <button onClick={cancel} class="btn-voice btn-voice-danger"><i className="fas fa-window-close"></i></button>
                </Col>
            </Row>
        </div>
    )
}

export default TextToSpeech;
