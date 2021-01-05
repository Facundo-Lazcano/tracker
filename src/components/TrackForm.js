import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import { FontAwesome } from "@expo/vector-icons";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder="Enter Name"
        />
        <Spacer>
          {recording ? (
            <Button
              titleStyle={{ fontSize: 20 }}
              title="Stop Recording"
              onPress={stopRecording}
              buttonStyle={{ backgroundColor: "red" }}
            />
          ) : (
            <Button
              title="Start Recording"
              titleStyle={{ fontSize: 20 }}
              onPress={startRecording}
            />
          )}
        </Spacer>
        <Spacer>
          {!recording && locations.length ? (
            <Button
              onPress={saveTrack}
              title="Save Recording"
              titleStyle={{ fontSize: 20 }}
              buttonStyle={{ backgroundColor: "green" }}
              icon={
                <FontAwesome
                  name="check-circle"
                  style={{ marginLeft: 15 }}
                  size={15}
                  color="white"
                />
              }
              iconRight
            />
          ) : null}
        </Spacer>
      </Spacer>
    </>
  );
};

export default TrackForm;
