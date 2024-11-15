# Snapshot 0.1w5
**Published:** 10/4/2024

Whoops! This one's a week late. Got a hell of a lot done on the project, then got to the point with my other obligations that I just needed a week off. Hope you enjoy!
## Download
<a class="btn btn-primary" href="https://drive.proton.me/urls/ECEFTZ3KA0#wdWSaYmbumoR">Download 0.1w5</a>
(The number on the executable is wrong, sorry about that! I realized I messed up my numbering system.) 
### Changelog
- Completely removed Jump Gates from VentusRush
- Renamed Proving Grounds to VentusRush, Renamed Ventus Tumble to Underground.
- Created VentusRush bridge.
- Created FBX Import preset to save time.
- Doubled minimum `DashPad` speed boost.
- CPU players are now properly setup.
- Reformatted boolean value of `playSounds` to a boolean function `ShouldPlayEffects` that asks whether or not it's appropriate to play effects triggered by this `PlayerController`.
- Reorganized the player's particles and sounds (internal effects) to separate Internal VS External sounds.
- Setting a player use to any kind of `InputWrapper` will now automatically toggle the player's internal effects.
- Added a few more item boxes to fill out Ventus Rush
- Refactored multiple board-specific player configuration values out of `PlayerController` and into `BoardStats`.
- Fixed a magic number in `PlayerController`. (Oops.)
- Added `GetStateSpecificMaxSpeed()` to the player's speedometer.
- Fixed a bug that prevented the player from switching out of `MovementMode.Riding` when they ran out of fuel.
- Refactored braking to be easier to understand.
- Item box particles no longer erroneously play on awake.
- Fixed multiple logical errors that prevented braking from working properly.
- Brake particles now play as intended.
- Refactored contact counting out of `PlayerController` and into a generic `ContactCounter`.
- Fuel bar now correctly displays cost of boosting and doesn't peak it's own bounds.
- Fixed bug where *all* players, both human and CPU would trigger the after-race music.

---
## Special Thanks to My Patrons
- Freakus
- ToyDragon
- Teejabs

If you like my work, consider [Supporting Me!](../../../About/SupportMe.md)