import React, { useEffect, useState } from "react";

const PlatformPage = (props) => {
  const [platform, setPlatform] = useState({
    name: ""
  });

  const platformName = props.match.params.name;
  const getPlatform = async () => {
    try {
      const response = await fetch(`/api/v1/platform/${platformName}`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const body = await response.json();
      setPlatform(body.platform);
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`);
    }
  };

  useEffect(() => {
    getPlatform();
  }, []);

  return (
    <div>
      <h1>{platform.name}</h1>
    </div>
  );
};

export default PlatformPage;
