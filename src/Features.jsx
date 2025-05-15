import React, { useState, useEffect } from 'react';

// Base square style
const squareStyleBase = {
  width: '60px',
  height: '60px',
  backgroundColor: '#000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '8px',
  position: 'relative',
  cursor: 'pointer',
  transition: 'all 0.4s ease',
  border: '2px solid #ffffff',
  borderRadius: '4px',
  boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)'
};

// Tech arrow style
const techArrowStyle = {
  position: 'absolute',
  left: '-30px',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '30px',
  height: '2px',
  background: 'linear-gradient(90deg, transparent, #ffffff)',
  opacity: 0,
  transition: 'opacity 0.3s ease',
  zIndex: 2,
  filter: 'drop-shadow(0 0 2px #ffffff)'
};

// Arrow head
const arrowHeadStyle = {
  position: 'absolute',
  right: '0',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '0',
  height: '0',
  borderTop: '4px solid transparent',
  borderBottom: '4px solid transparent',
  borderLeft: '6px solid #ffffff'
};

// Tooltip-style property display
const propertyStyle = {
  position: 'absolute',
  top: 'calc(100% + 10px)',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '120px',
  padding: '8px',
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  border: '1px solid #ffffff',
  borderRadius: '2px',
  color: '#ffffff',
  fontSize: '10px',
  fontFamily: '"Courier New", monospace',
  opacity: 0,
  transition: 'opacity 0.3s ease',
  pointerEvents: 'none',
  zIndex: 5,
  boxShadow: '0 0 8px rgba(255, 255, 255, 0.3)',
  textAlign: 'center'
};

// Scan animation for tech arrow
const scanAnimation = `
@keyframes scan {
  0% { background-position: -30px 0; }
  100% { background-position: 30px 0; }
}
@keyframes pulse {
  0% { opacity: 0.3; }
  50% { opacity: 1; }
  100% { opacity: 0.3; }
}
`;

const HoverBlock = ({ property, onArrowHover, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <style>{scanAnimation}</style>
      <div
        style={{
          ...squareStyleBase,
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          boxShadow: isHovered ? '0 0 12px #ffffff' : '0 0 8px rgba(255, 255, 255, 0.5)',
          zIndex: isHovered ? 10 : 1
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
        onClick={onClick}
      >
        <div 
          style={{
            ...techArrowStyle,
            opacity: isHovered ? 1 : 0,
            animation: isHovered ? 'scan 1.5s linear infinite' : 'none'
          }}
          onMouseEnter={onArrowHover}
          onTouchStart={onArrowHover}
        >
          <div style={arrowHeadStyle}></div>
        </div>

        <div style={{
          ...propertyStyle,
          opacity: isHovered ? 1 : 0
        }}>
          <div style={{ 
            color: '#fff', 
            marginBottom: '5px',
            borderBottom: '1px solid #ffffff',
            paddingBottom: '3px',
            fontSize: '9px'
          }}>
            SYSTEM PROPERTY
          </div>
          {property}
        </div>
      </div>
    </>
  );
};

const ExplanationPanel = ({ isMobile, selectedModule }) => {
  // Module descriptions
  const moduleDescriptions = {
    "RENDER_MODULE.v2.4": {
      title: "Render Module v2.4",
      description: "Handles all graphical rendering operations with enhanced ray tracing capabilities.",
      status: "Optimal",
      specs: [
        "Resolution: 4K @ 120Hz",
        "Polygons: 12M/sec",
        "VRAM: 12GB allocated"
      ]
    },
    "PHYSICS_ENGINE.core": {
      title: "Physics Engine Core",
      description: "Advanced collision detection and rigid body dynamics processor.",
      status: "Stable",
      specs: [
        "Collisions/sec: 25,000",
        "Precision: 64-bit",
        "Threads: 16 active"
      ]
    },
    "AI_NEURALNET.dll": {
      title: "AI Neural Network",
      description: "Deep learning module for adaptive behavior and decision making.",
      status: "Learning",
      specs: [
        "Nodes: 12,288",
        "Training rate: 0.87",
        "Memory: 8GB allocated"
      ]
    },
    "NETWORK_SYNC.api": {
      title: "Network Sync API",
      description: "Real-time multiplayer synchronization and data transfer.",
      status: "Connected",
      specs: [
        "Ping: 24ms",
        "Bandwidth: 128Mbps",
        "Connections: 32 active"
      ]
    },
    "AUDIO_PROCESSOR.x64": {
      title: "Audio Processor",
      description: "3D spatial audio processing with dynamic range compression.",
      status: "Normal",
      specs: [
        "Channels: 7.1",
        "Latency: 12ms",
        "Sample rate: 96kHz"
      ]
    },
    "INPUT_HANDLER.sys": {
      title: "Input Handler",
      description: "Low-latency device input processing and gesture recognition.",
      status: "Active",
      specs: [
        "Devices: 3 connected",
        "Poll rate: 1000Hz",
        "Latency: <2ms"
      ]
    }
  };

  const defaultContent = {
    title: "System Core Grid",
    description: "Select a module to view detailed specifications and status information.",
    status: "Ready",
    specs: []
  };

  const content = selectedModule ? moduleDescriptions[selectedModule] : defaultContent;

  return (
    <div style={{
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      border: '1px solid #ffffff', // Changed from #00ff00 to #ffffff
      padding: isMobile ? '15px' : '20px',
      margin: isMobile ? '20px 10px 0' : '0 0 0 30px',
      maxWidth: isMobile ? 'calc(100% - 40px)' : '400px',
      color: '#ffffff', // Changed from #00ff00 to #ffffff
      fontFamily: '"Courier New", monospace',
      boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)', // Changed from green to white
      borderRadius: '5px',
      position: 'relative',
      overflow: 'hidden',
      fontSize: isMobile ? '14px' : 'inherit'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(90deg, transparent, #ffffff, transparent)', // Changed to white
        animation: 'scan 2s linear infinite'
      }}></div>
      
      <h3 style={{
        borderBottom: '1px dashed #ffffff', // Changed to white
        paddingBottom: '10px',
        marginTop: '0',
        textTransform: 'uppercase',
        fontSize: isMobile ? '16px' : 'inherit'
      }}>{content.title}</h3>
      
      <p>{content.description}</p>
      
      {selectedModule && (
        <>
          <div style={{
            margin: '15px 0',
            padding: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)', // Changed from green to white
            borderLeft: '3px solid #ffffff' // Changed from green to white
          }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{
                width: '10px',
                height: '10px',
                backgroundColor: '#ffffff', // Changed from green to white
                marginRight: '10px',
                animation: 'pulse 1.5s infinite'
              }}></div>
              <span>Status: <strong>{content.status}</strong></span>
            </div>
          </div>

          <h4 style={{
            borderBottom: '1px dashed rgba(255, 255, 255, 0.5)',
            paddingBottom: '5px',
            marginBottom: '10px'
          }}>SPECIFICATIONS</h4>
          
          <ul style={{
            paddingLeft: '20px',
            listStyleType: 'none'
          }}>
            {content.specs.map((spec, index) => (
              <li key={index} style={{ 
                marginBottom: '8px', 
                position: 'relative', 
                paddingLeft: '15px' 
              }}>
                <span style={{
                  position: 'absolute',
                  left: 0,
                  top: '6px',
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#ffffff', // Changed from green to white
                  borderRadius: '50%'
                }}></span>
                {spec}
              </li>
            ))}
          </ul>
        </>
      )}
      
      {!selectedModule && (
        <ul style={{
          paddingLeft: '20px',
          listStyleType: 'none'
        }}>
          <li style={{ marginBottom: '10px', position: 'relative', paddingLeft: '15px' }}>
            <span style={{
              position: 'absolute',
              left: 0,
              top: '6px',
              width: '6px',
              height: '6px',
              backgroundColor: '#ffffff', // Changed from green to white
              borderRadius: '50%'
            }}></span>
            <strong>Interactive Modules:</strong> Click to view system specs
          </li>
          <li style={{ marginBottom: '10px', position: 'relative', paddingLeft: '15px' }}>
            <span style={{
              position: 'absolute',
              left: 0,
              top: '6px',
              width: '6px',
              height: '6px',
              backgroundColor: '#ffffff', // Changed from green to white
              borderRadius: '50%'
            }}></span>
            <strong>Real-time Status:</strong> All systems operational
          </li>
          <li style={{ marginBottom: '10px', position: 'relative', paddingLeft: '15px' }}>
            <span style={{
              position: 'absolute',
              left: 0,
              top: '6px',
              width: '6px',
              height: '6px',
              backgroundColor: '#ffffff', // Changed from green to white
              borderRadius: '50%'
            }}></span>
            <strong>Connection Matrix:</strong> Neural pathways stable
          </li>
        </ul>
      )}
    </div>
  );
};

const LogoGrid = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [selectedModule, setSelectedModule] = useState(null);
  const properties = [
    "RENDER_MODULE.v2.4",
    "PHYSICS_ENGINE.core",
    "AI_NEURALNET.dll",
    "NETWORK_SYNC.api",
    "AUDIO_PROCESSOR.x64",
    "INPUT_HANDLER.sys"
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleArrowHover = () => {
    try {
      new Audio('./mixkit-technology-notification-3123.wav').play().catch(e => console.log("Audio error:", e));
    } catch (e) {
      console.log("Audio error:", e);
    }
  };

  const handleModuleClick = (module) => {
    setSelectedModule(module);
    try {
      new Audio('./mixkit-technology-notification-3123.wav').play().catch(e => console.log("Audio error:", e));
    } catch (e) {
      console.log("Audio error:", e);
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#000',
      padding: isMobile ? '10px' : '20px',
      position: 'relative',
      zIndex: 0,
      overflow: 'hidden'
    }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: isMobile ? '100%' : '300px',
        marginBottom: isMobile ? '30px' : '0'
      }}>
        {properties.map((prop, index) => (
          <HoverBlock 
            key={index} 
            property={prop} 
            onArrowHover={handleArrowHover}
            onClick={() => handleModuleClick(prop)}
          />
        ))}
      </div>
      <ExplanationPanel isMobile={isMobile} selectedModule={selectedModule} />
    </div>
  );
};

export default LogoGrid;