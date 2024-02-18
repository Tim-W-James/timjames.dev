import normalizeEmail from "validator/lib/normalizeEmail";
import trim from "validator/lib/trim";

/**
 * Encode a JSON object for the request of a HTTP body using
 * application/x-www-form-urlencoded
 *
 * @param data - JSON object to encode
 */
const encodeContactFormData = (data: object) =>
  Object.entries(data)
    .map(
      (item) =>
        `${encodeURIComponent(item[0])}=${encodeURIComponent(
          item[1] === undefined
            ? ""
            : // Sanitize and format data
              item[0] === "email"
              ? normalizeEmail(item[1])
              : trim(item[1])
        )}`
    )
    .join("&");

export default encodeContactFormData;
