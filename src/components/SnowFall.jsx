import React, { useState } from "react"
import Snowfall from "react-snowfall"
import snowflake from "../images/white-snowflake.png"

const isWinter = [11, 12, 0, 1].includes(new Date().getMonth())

export default function SnowFall() {
  const {} = useState()

  const snowflakeImage = new Image()
  snowflakeImage.src = snowflake

  return (
    isWinter && (
      <Snowfall
        images={[snowflakeImage]}
        snowflakeCount={100}
        radius={[2, 10]}
        style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
      />
    )
  )
}
