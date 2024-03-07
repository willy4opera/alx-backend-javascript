import ClassRoom from './0-classroom';

/**
 * Here, we creates an array of {@link ClassRoom} with
 * specific size.
 * @returns An array of {@link ClassRoom}s.
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
