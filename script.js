/* ========================================
   DON RYAN NDT CONSULTANTS — script.js
   ======================================== */

/**
 * showTech(id, idx)
 * Switches the active technology tab panel.
 * @param {string} id  - Panel ID suffix (e.g. 'ndt', 'paut')
 * @param {number} idx - Zero-based index of the tab button
 */
function showTech(id, idx) {
  // Hide all panels
  document.querySelectorAll('.tpanel').forEach(p => p.classList.remove('on'));
  // Deactivate all tab buttons
  document.querySelectorAll('.ttab').forEach(t => t.classList.remove('on'));
  // Show selected panel
  document.getElementById('tp-' + id).classList.add('on');
  // Activate selected tab button
  document.querySelectorAll('.ttab')[idx].classList.add('on');
}