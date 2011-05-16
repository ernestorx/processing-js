// These are the test files in this dir to be run.
var tests = [
  { path: "defaults-background_and_size.pde", tags: ["2D"] },
  { path: "background.pde", tags: ["2D"] },
  { path: "circles.pde", tags: ["2D"] },
  { path: "circles2.pde", tags: ["2D"] },
  { path: "conditionals1.pde", tags: ["2D"] },
  { path: "conditionals2.pde", tags: ["2D"] },
  { path: "datatype-conversion.pde", tags: ["2D"] },
  { path: "distance-2d.pde", tags: ["2D"] },
  { path: "embedded-iteration.pde", tags: ["2D"] },
  { path: "iteration.pde", tags: ["2D"] },
  { path: "letters.pde", tags: ["2D"], epsilonOverride: 0.37 }, /* See ticket #1172 */
  { path: "logical-operators.pde", tags: ["2D"] },
  { path: "point-line-rect.pde", tags: ["2D"] },
  { path: "sine-wave.pde", tags: ["2D"] },
  { path: "target.pde", tags: ["2D"] },
  { path: "triangle-strip.pde", tags: ["2D"] },
  { path: "true-false.pde", tags: ["2D"] },
  { path: "variable-scope.pde", tags: ["2D"] },
  { path: "variables.pde", tags: ["2D"] },
  { path: "words.pde", tags: ["2D"], epsilonOverride: 0.20 }, /* See ticket #1172 */
  { path: "defaults-text.pde", tags: ["2D"], epsilonOverride: 0.07 }, /* See ticket #1172 */
  { path: "simple.pde", tags: ["2D"] },
  { path: "arc-tangent.pde",  tags: ["2D"] },
  { path: "bezier.pde", tags: ["2D"] },
  { path: "ellipse.pde", tags: ["2D"] },
  { path: "piechart.pde", tags: ["2D"] },
  { path: "point-stroke-array-2d.pde", tags: ["2D"] },
  { path: "bezier-ellipse.pde", tags: ["2D"] },
  { path: "curves.pde", tags: ["2D"] },
  { path: "curve.pde", tags: ["2D"] },
  { path: "continuous-curve.pde", tags: ["2D"] },
  { path: "points-lines.pde", tags: ["2D"] },
  { path: "rect-quad.pde", tags: ["2D"] },
  { path: "size-fill-rect.pde", tags: ["2D"] },
  { path: "triangle.pde", tags: ["2D"] },
  { path: "point_3D_stroke.pde", tags: ["3D"], knownFailureTicket: "852" },
  { path: "point_3D_strokeWeight.pde", tags: ["3D"], knownFailureTicket: "852" },
  { path: "box.pde", tags: ["3D"], knownFailureTicket: "852" },
  { path: "ambientLight_1.pde", tags: ["3D"] },
  { path: "ambientLight_p5test_1.pde", tags: ["3D"] },
  { path: "ambientLight_p5test_2.pde", tags: ["3D"], knownFailureTicket: "1173" },
  { path: "ambient_p5test.pde", tags: ["3D"] },
  { path: "directionalLight_p5test_1.pde", tags: ["3D"] },
  { path: "directionalLight_p5test_2.pde", tags: ["3D"] },
  { path: "emissive_p5test.pde", tags: ["3D"] },
  { path: "lightSpecular_p5test.pde", tags: ["3D"], knownFailureTicket: "1173" },
  { path: "pointLight_p5test.pde", tags: ["3D"] },
  { path: "shininess_p5test.pde", tags: ["3D"] },
  { path: "specular_p5test.pde", tags: ["3D"], knownFailureTicket: "1173" },
  { path: "spotLight_p5test.pde", tags: ["3D"], knownFailureTicket: "1173" },
  { path: "createGraphics.pde", tags: ["3D"], knownFailureTicket: "1075" },
  { path: "createimage.pde", tags: ["2D"] },
  { path: "array.pde", tags: ["2D"] },
  { path: "background-image.pde", tags: ["2D"] },
  { path: "brightness-2.pde", tags: ["2D"] },
  { path: "create-image.pde", tags: ["2D"] },
  { path: "creating.pde", tags: ["2D"] },
  { path: "displaying.pde", tags: ["2D"] },
  { path: "graphing-2d.pde", tags: ["2D"] },
  { path: "histogram.pde", tags: ["2D"], knownFailureTicket: "1174" },
  { path: "linear-gradient.pde", tags: ["2D"] },
  { path: "mandelbrot.pde", tags: ["2D"], knownFailureTicket: "1174" },
  { path: "modulo.pde", tags: ["2D"] },
  { path: "multiple-constructors.pde", tags: ["2D"] },
  { path: "neighborhood.pde", tags: ["2D"] },
  { path: "no-loop.pde", tags: ["2D"] },
  { path: "reading.pde", tags: ["2D"] },
  { path: "relativity.pde", tags: ["2D"] },
  { path: "triangle-flower.pde", tags: ["2D"] },
  { path: "self-1-success.pde", tags: ["Calibration"] },
  { path: "self-2-fail.pde", tags: ["Calibration"] },
  { path: "self-3-fail.pde", tags: ["Calibration"] },
  { path: "self-4-fail.pde", tags: ["Calibration"] },
  { path: "self-5-success.pde", tags: ["Calibration"] },
  { path: "beginEndShape-2dlines.pde", tags:["endShape2D", "2D"] },
  { path: "beginEndShape-2dnocloseline.pde", tags:["endShape2D", "2D"] },
  { path: "beginEndShape-2dnoclosetriangle.pde", tags:["endShape2D", "2D"] },
  { path: "beginEndShape-2dnocloserectangle.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.07 },
  { path: "beginEndShape-2dnofilltriangle.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.07 },
  { path: "beginEndShape-2dnofillrectangle.pde", tags:["endShape2D", "2D"] },
  { path: "beginEndShape-2dpoints.pde", tags:["endShape2D", "2D"], knownFailureTicket: "1245" },
  { path: "beginEndShape-2dpolygon.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.07 },
  { path: "beginEndShape-2dquads.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.07 },
  { path: "beginEndShape-2dquadstrip1.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.07 },
  { path: "beginEndShape-2dquadstrip2.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.10 },
  { path: "beginEndShape-2dtrianglefan1.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.12 },
  { path: "beginEndShape-2dtrianglefan2.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.15 },
  { path: "beginEndShape-2dtriangles1.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.12 },
  { path: "beginEndShape-2dtriangles2.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.12 },
  { path: "beginEndShape-2dtrianglestrip1.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.15 },
  { path: "beginEndShape-2dtrianglestrip2.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.12 },
  { path: "beginEndShape-3dlines.pde", tags:["endShape3D"] },
  { path: "beginEndShape-3dnoclose.pde", tags:["endShape3D"] },
  { path: "beginEndShape-3dnomod.pde", tags:["endShape3D"]},
  { path: "beginEndShape-3dnomodnofill.pde", tags:["endShape3D"]},
  { path: "beginEndShape-3dpoints.pde", tags:["endShape3D"]},
  { path: "beginEndShape-3dquads1.pde", tags:["endShape3D"]},
  { path: "beginEndShape-3dquads2.pde", tags:["endShape3D"]},
  { path: "beginEndShape-3dquadstrip1.pde", tags:["endShape3D"]},
  { path: "beginEndShape-3dquadstrip2.pde", tags:["endShape3D"]},
  { path: "beginEndShape-3dtrianglefan1.pde", tags:["endShape3D"]},
  { path: "beginEndShape-3dtrianglefan2.pde", tags:["endShape3D"]},
  { path: "beginEndShape-3dtriangles1.pde", tags:["endShape3D"]},
  { path: "beginEndShape-3dtriangles2.pde", tags:["endShape3D"]},
  { path: "beginEndShape-3dtrianglestrip1.pde", tags:["endShape3D"]},
  { path: "beginEndShape-3dtrianglestrip2.pde", tags:["endShape3D"]},
  { path: "textWidth_comic.pde", tags:["2D"], epsilonOverride: 0.35} /* See ticket #1172 */
];
