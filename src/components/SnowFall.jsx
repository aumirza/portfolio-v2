import React, { useEffect, useState } from "react"
import Snowfall from "react-snowfall"
import snowflake from "../images/white-snowflake.png"
import { isWinter } from "../constants"

export default function SnowFall() {
  const [snowflakeImage, setSnowflakeImage] = useState(null)

  useEffect(() => {
    const snowflakeImage = new Image()
    snowflakeImage.src = snowflake
    setSnowflakeImage(snowflakeImage)
  }, [])

  return (
    isWinter &&
    snowflakeImage && (
      <Snowfall
        images={[snowflakeImage]}
        snowflakeCount={100}
        radius={[2, 10]}
        style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
      />
    )
  )
}
