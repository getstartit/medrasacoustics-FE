export const Acoustics = () =>{
    return(
        <>
        <div className="acoustics-page">
      {/* Acoustics Section */}
      <div className="acoustics-section">
        <div className="acoustics-content">
          <div className="acoustics-icon-title">
            <img src="/icons/acoustics.png" alt="Acoustics Icon" className="acoustics-icon" />
            <h2>Acoustics</h2>
          </div>
          <p>
            Architectural acoustics significantly affect the overall quality of sound and the way we perceive it.
            For any source of sound, it is the surrounding environment that manipulates the perceived sound. 
            Carefully designed interior acoustics greatly enhance performance, optimizing the musical force and clarity of voice and instruments.
          </p>
          <p>
            Right from the inception, it is important to have good initial acoustic design planning because it saves time, money, and effort.
            No more bad-sounding rooms with standing waves, unclear low frequencies, asymmetric sound pictures, lack of linearity, harmonic and phase distortion, 
            and most of all, no more expensive corrections at later stages.
          </p>
        </div>
        <div className="acoustics-image">
          <img src="/images/acoustics-room.jpg" alt="Acoustic Room" />
        </div>
      </div>

     {/* Audio Visuals Section */}
<div className="acoustics-section audio-visuals">
  <div className="acoustics-image">
    <img src="/images/audio-visual.jpg" alt="Audio Visual Setup" />
  </div>
  <div className="acoustics-content">
    <div className="acoustics-icon-title">
      <img src="/icons/audio-visuals.png" alt="Audio Visuals Icon" className="acoustics-icon" />
      <h2>Audio Visuals</h2>
    </div>
    <p>
      Audio-visual setups enhance the experience by integrating sound and visuals in a way that complements the environment.
      Whether in theaters, conference rooms, or home entertainment systems, 
      properly tuned AV systems bring clarity and immersion.
    </p>
    <p>
      By balancing speaker placement, sound reflection control, and the right projection technology, 
      we ensure that both sound and visuals work in harmony for the best user experience.
    </p>
  </div>
</div>


      {/* Room Tuning Section */}
      <div className="acoustics-section">
        <div className="acoustics-content">
          <div className="acoustics-icon-title">
            <img src="/icons/room-tuning.png" alt="Room Tuning Icon" className="acoustics-icon" />
            <h2>Room Tuning, Calibration & Optimization</h2>
          </div>
          <p>
            Proper room tuning and calibration ensure balanced sound for optimal performance. 
            This process involves adjusting the acoustics of a space by modifying sound reflections, 
            reducing noise distortions, and calibrating audio systems to fit the environment.
          </p>
          <p>
            Whether it's a recording studio, home theater, or live venue, 
            calibration fine-tunes frequencies, speaker positioning, and equalization for an immersive and accurate listening experience.
          </p>
        </div>
        <div className="acoustics-image">
          <img src="/images/room-tuning.jpg" alt="Room Tuning" />
        </div>
      </div>
    </div>
        </>
    )
}