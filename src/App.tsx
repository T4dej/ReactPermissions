import React, { useState, useEffect } from 'react';
import { ConnectionCreated, ConnectionStatus, PermissionsText, Role } from './enum';

const App: React.FC = () => {
  const [connection, setConnection] = useState<string | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [result, setResult] = useState<string>('');

  const updateResult = () => {
    if (connection && connectionStatus && role) {
      let resultText = '';

      if (connection === ConnectionCreated.BY_ME) {
        if (connectionStatus === ConnectionStatus.PRIVATE) {
          switch (role) {
            case Role.OWNER:
              resultText = PermissionsText.OWNER;
              break;
            case Role.ADMIN:
              resultText = "text (something 2) \n Nekaj";
              break;
            case Role.EDITOR:
              resultText = "text (something 3)";
              break;
            case Role.USER:
              resultText = "text (something 4)";
              break;
            case Role.VIEWER:
              resultText = "Can't see shit!";
              break;
          }
        } else if (connectionStatus === ConnectionStatus.SHARED) {
          switch (role) {
            case Role.OWNER:
              resultText = "text (something 7)";
              break;
            case Role.ADMIN:
              resultText = "text (something 8)";
              break;
            case Role.EDITOR:
              resultText = "text (something 9)";
              break;
            case Role.USER:
              resultText = "text (something 10)";
              break;
            case Role.VIEWER:
              resultText = "Can't see shit!";
              break;
          }
        }
      } else if (connection === ConnectionCreated.BY_OTHERS) {
        if (connectionStatus === ConnectionStatus.PRIVATE) {
          switch (role) {
            case Role.OWNER:
              resultText = "text (something 13)";
              break;
            case Role.ADMIN:
              resultText = "text (something 14)";
              break;
            case Role.EDITOR:
              resultText = "text (something 15)";
              break;
            case Role.USER:
              resultText = "text (something 16)";
              break;
            case Role.VIEWER:
              resultText = "Can't see shit!";
              break;
          }
        } else if (connectionStatus === ConnectionStatus.SHARED) {
          switch (role) {
            case Role.OWNER:
              resultText = "text (something 19)";
              break;
            case Role.ADMIN:
              resultText = "text (something 20)";
              break;
            case Role.EDITOR:
              resultText = "text (something 21)";
              break;
            case Role.USER:
              resultText = "text (something 22)";
              break;
            case Role.VIEWER:
              resultText = "Can't see shit!";
              break;
          }
        }
      }

      setResult(resultText);
    }
  };

  // Call updateResult when any of the state variables change
  useEffect(() => {
    updateResult();
  }, [connection, connectionStatus, role]);

  return (
    <div>
      <div>
        <h3>Connection was created by:</h3>
        <label>
          <input
            type="radio"
            name="connection"
            value={ConnectionCreated.BY_ME}
            onChange={() => setConnection(ConnectionCreated.BY_ME)}
          />
          Me
        </label>
        <label>
          <input
            type="radio"
            name="connection"
            value={ConnectionCreated.BY_OTHERS}
            onChange={() => setConnection(ConnectionCreated.BY_OTHERS)}
          />
          Others
        </label>
      </div>
      <div>
        <h3>Connection status:</h3>
        <label>
          <input
            type="radio"
            name="connection-status"
            value={ConnectionStatus.PRIVATE}
            onChange={() => setConnectionStatus(ConnectionStatus.PRIVATE)}
          />
          Private
        </label>
        <label>
          <input
            type="radio"
            name="connection-status"
            value={ConnectionStatus.SHARED}
            onChange={() => setConnectionStatus(ConnectionStatus.SHARED)}
          />
          Shared
        </label>
      </div>
      <div>
        <h3>User Role:</h3>
        <label>
          <input
            type="radio"
            name="role"
            value={Role.OWNER}
            onChange={() => setRole(Role.OWNER)}
          />
          Owner
        </label>
        <label>
          <input
            type="radio"
            name="role"
            value={Role.ADMIN}
            onChange={() => setRole(Role.ADMIN)}
          />
          Admin
        </label>
        <label>
          <input
            type="radio"
            name="role"
            value={Role.EDITOR}
            onChange={() => setRole(Role.EDITOR)}
          />
          Editor
        </label>
        <label>
          <input
            type="radio"
            name="role"
            value={Role.USER}
            onChange={() => setRole(Role.USER)}
          />
          User
        </label>
        <label>
          <input
            type="radio"
            name="role"
            value={Role.VIEWER}
            onChange={() => setRole(Role.VIEWER)}
          />
          Viewer
        </label>
      </div>
      <hr />
      <div>
        <h3>Visible actions:</h3>
        <div id="result">
          <pre>{result}</pre>
        </div>
      </div>
    </div>
  );
};

export default App;
