// import { Cloudinary } from "@cloudinary/url-gen"
import { useEffect, useRef } from "react"

const UploadWidget = () => {
  const cloudinaryRef = useRef()
  const widgetRef = useRef()
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudNamw: "dnrp3hjng",
      uploadPreset: "kug0sp2o"
    , function(error, result) {
      console.log(result)
    }})
  }, [])
  return (
    <button onCLick={() => widgetRef.current.open()}>
      upload
    </button>
  )
}

export default UploadWidget